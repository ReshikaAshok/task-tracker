// frontend/hooks/useKeyboardShortcuts.js

import { useEffect } from "react";

export default function useKeyboardShortcuts(actions = {}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT") return;

      switch (e.key) {
        case "n":
          actions.onNewTask?.();
          break;
        case "f":
          actions.onFocusMode?.();
          break;
        case "Escape":
          actions.onEscape?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [actions]);
}
