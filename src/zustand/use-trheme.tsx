"use client";
import { create } from "zustand";
import Cookies from "js-cookie";

interface ThemeState {
  mode: "light" | "dark";
  toggleMode: () => void;
  setMode: (mode: "light" | "dark") => void;
}

const useThemeStore = create<ThemeState>()((set) => {
  return {
    mode: "dark",
    setMode: (mode) => {
      return set({ mode });
    },
    toggleMode: () =>
      set((state) => {
        Cookies.set("theme", state.mode === "light" ? "dark" : "light");
        return { mode: state.mode === "light" ? "dark" : "light" };
      }),
  };
});

export default useThemeStore;
