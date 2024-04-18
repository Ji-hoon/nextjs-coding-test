"use client";

import { LABELS, PATHS, TITLES, TYPES } from "@/src/global/constants";
import Button from "../atoms/Button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const username = "김지훈";

  return (
    <header className="border-b border-slate-200 flex items-center p-4 w-full h-[81px]">
      <h1 className="text-xl font-bold px-2">
        {pathname === PATHS.ROOT
          ? TITLES.ROOT
          : pathname.includes(PATHS.DASHBOARD)
          ? TITLES.DASHBOARD
          : `${username}님, ${TITLES.QUESTIONS}`}
      </h1>
      <div className="flex-auto text-center h-12"></div>
      {/* / 경로일 때 버튼 노출 (/dashboard 경로일 때 미노출) */}
      {pathname === PATHS.ROOT && (
        <Button
          type={TYPES.LINK}
          link={PATHS.DASHBOARD}
          style={TYPES.NORMAL_STYLE}
          label={LABELS.SHOW_RESULT}
        />
      )}
      {pathname.includes(PATHS.DASHBOARD) && (
        <Button
          type={TYPES.LINK}
          link={PATHS.ROOT}
          style={TYPES.NORMAL_STYLE}
          label={LABELS.GO_MAIN}
        />
      )}
    </header>
  );
}
