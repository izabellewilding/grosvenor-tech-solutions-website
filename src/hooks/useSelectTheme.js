import { useState, useEffect } from "react";

export const useSelectTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const sessionTheme = window.sessionStorage.getItem("theme");
    sessionTheme && setTheme(sessionTheme);

    if (sessionTheme === null) {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");
    } else {
      setTheme(sessionTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      sessionStorage.setItem("theme", "light");
    } else if (theme === "light") {
      setTheme("dark");
      sessionStorage.setItem("theme", "dark");
    }
  };

  return [theme, toggleTheme];
};
