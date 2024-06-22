import { persist, createJSONStorage, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { TrackingModeType, UserType } from "@interfaces/user.types";
import axios from "axios";
import { PostureStatus } from "@src/interfaces/posture.types";

type UserState = {
  isSetupComplete: boolean;
  completeSetup: () => void;

  isTrackingEnabled: boolean;
  setTrackingEnabled: (value: boolean) => void;

  currentPosture: PostureStatus;
  setCurrentPosture: (value: PostureStatus) => void;

  postureData: Array<{ status: PostureStatus; date: Date }>;
  savePostureData: (data: Array<{ status: PostureStatus; date: Date }>) => void;

  isAuth: boolean;
  user: UserType;
  greeting: () => string;
  setAuth: (isAuth: boolean, user: UserType) => void;
  setDailyGoal: (newDailyGoal: number) => void;

  setLevel: (newLevel: number) => void;
  setXP: (newXP: number | ((prevXP: number) => number)) => void;
  setHP: (newHP: number | ((prevHP: number) => number)) => void;
  setDailyStreakCounter: (newDailyStreakCounter: number) => void;
  mode: TrackingModeType;
  changeMode: (value: TrackingModeType) => void;
};

const userInitialState: UserType = {
  id: "",
  deviceIds: [],
  currentDeviceId: null,
  name: "",
  dailyGoal: 80, // out of 100
  providerId: "",
  level: 1,
  xp: 0,
  hp: 100,
  daily_streak_counter: 0,
};

// Clear AsyncStorage:
// AsyncStorage.clear();

export const useUser = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        isSetupComplete: false,
        completeSetup: () => set({ isSetupComplete: true }),

        isTrackingEnabled: false,
        setTrackingEnabled: (enabled) => set({ isTrackingEnabled: enabled }),

        currentPosture: "not_reading",
        setCurrentPosture: (value) => {
          const prevPostureData = get().postureData;

          if (value === "bad" || value === "good") {
            prevPostureData.push({ status: value, date: new Date() });
            set({ currentPosture: value, postureData: prevPostureData });
          } else {
            set({ currentPosture: value });
          }
        },

        postureData: [],
        savePostureData: () => {
          const postureData = get().postureData;
          const user_id = get().user.id;

          if (!postureData.length) {
            return;
          }

          const records = postureData
            .filter((p) => p.status === "bad" || p.status === "good")
            .map((p) => ({
              user_id,
              good_posture: p.status === "good",
              recorded_at: p.date.toISOString(),
            }));

          // TODO: replace this with the axios interceptor api
          axios
            .post(`http://localhost:3000/api/v1/posture/records`, records)
            .then(() => {
              set({ postureData: [] });
            })
            .catch(console.error);
        },

        isAuth: false,
        user: userInitialState,
        greeting: () => `Hello ${get().user.name}!`,
        setAuth: (isAuth: boolean, user: UserType) =>
          isAuth
            ? set({ isAuth: true, user })
            : set({
                isAuth: false,
                user: userInitialState,
                isSetupComplete: false,
                // TODO: temporarily setting this to false
              }),
        setDailyGoal: (newDailyGoal: number) =>
          set((state: { isAuth: boolean; user: UserType }) => ({
            ...state,
            user: {
              ...state.user,
              dailyGoal: newDailyGoal,
            },
          })),
        setLevel: (newLevel: number) =>
          set((state: { isAuth: boolean; user: UserType }) => ({
            ...state,
            user: {
              ...state.user,
              level: newLevel,
            },
          })),
        setXP: (newXP: number | ((prevXP: number) => number)) =>
          set((state: { isAuth: boolean; user: UserType }) => ({
            ...state,
            user: {
              ...state.user,
              xp: typeof newXP === "function" ? newXP(state.user.xp) : newXP,
            },
          })),
        setHP: (newHP: number | ((prevHP: number) => number)) =>
          set((state: { isAuth: boolean; user: UserType }) => ({
            ...state,
            user: {
              ...state.user,
              hp: typeof newHP === "function" ? newHP(state.user.hp) : newHP,
            },
          })),
        setDailyStreakCounter: (newDailyStreakCounter: number) =>
          set((state: { isAuth: boolean; user: UserType }) => ({
            ...state,
            user: {
              ...state.user,
              daily_streak_counter: newDailyStreakCounter,
            },
          })),

        mode: "PHONE",
        changeMode: (value: TrackingModeType) => set({ mode: value }),
      }),
      {
        storage: createJSONStorage(() => AsyncStorage),
        name: "user-db",
      },
    ),
  ),
);
