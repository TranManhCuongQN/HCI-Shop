"use client";
import { create } from "zustand";

interface ThemeState {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const useThemeStore = create<ThemeState>()((set) => {
  if (typeof window !== "undefined") {
    const mode =
      (localStorage.getItem("mode") as ThemeState["mode"]) || "light";
    return {
      mode: mode || "light",
      toggleMode: () =>
        set((state) => {
          localStorage.setItem(
            "mode",
            state.mode === "light" ? "dark" : "light"
          );
          return { mode: state.mode === "light" ? "dark" : "light" };
        }),
    };
  }
  return {
    mode: "light",
    toggleMode: () =>
      set((state) => {
        return { mode: state.mode === "light" ? "dark" : "light" };
      }),
  };
});

export default useThemeStore;