"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-gray-300 p-2 text-xl leading-none transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {/* 마운트 전에는 테마를 알 수 없으므로 아이콘 깜빡임 방지 */}
      <span className={isDark === null ? "invisible" : ""}>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
