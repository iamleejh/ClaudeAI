"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  // sendBeacon은 페이지를 떠나는 중에도 요청 전송을 보장하므로 링크 이동을 막지 않습니다.
  const recordClick = () => {
    const body = new Blob([JSON.stringify({ linkId: id })], { type: "application/json" });
    navigator.sendBeacon("/api/click", body);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border-2 border-gray-900 bg-white px-6 py-5 text-center font-semibold transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-100 dark:bg-gray-900"
    >
      {title}
    </a>
  );
}
