"use client";
import { create } from "zustand";
import Cookies from "js-cookie";

interface ThemeState {
  mode: "light" | "dark";
  toggleMode: () => void;
  setMode: (mode: "light" | "dark") => void;
}

const useThemeStore = create<ThemeState>()((set) => {
  if (typeof window === "undefined") {
    console.log("mode server", Cookies.get("mode"));
  } else {
    console.log("mode client", Cookies.get("mode"));
  }
  return {
    mode: (Cookies.get("mode") as "dark" | "light") || "dark",
    setMode: (mode) => {
      return set({ mode });
    },
    toggleMode: () =>
      set((state) => {
        Cookies.set("mode", state.mode === "light" ? "dark" : "light");
        return { mode: state.mode === "light" ? "dark" : "light" };
      }),
  };
});

export default useThemeStore;
