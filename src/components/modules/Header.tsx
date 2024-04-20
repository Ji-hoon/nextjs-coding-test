"use client";

import { LABELS, PATHS, TITLES, TYPES } from "@/src/global/constants";
import Button from "../atoms/Button";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { storeProps } from "@/src/global/types";

export default function Header() {
  const pathname = usePathname();

  const { isRegistered, registeredUserInfo } = useSelector(
    (state: storeProps) => state.survey
  );
  const username = registeredUserInfo.memberName;

  const currentStorageData = localStorage.getItem("surveyData");
  const currentData = JSON.parse(currentStorageData as string);

  return (
    <header className="sticky top-0 backdrop-blur bg-white/95 supports-backdrop-blur:bg-white/95 border-b border-slate-200 flex items-center p-4 w-full h-[81px]">
      <h3 className="text-xl font-bold px-2">
        {pathname === PATHS.ROOT ? (
          TITLES.ROOT
        ) : pathname.includes(PATHS.DASHBOARD) ? (
          TITLES.DASHBOARD
        ) : (
          <>
            {isRegistered && (
              <>
                <span className="text-sky-500">{username}</span>님,{" "}
              </>
            )}
            {TITLES.QUESTIONS}
          </>
        )}
      </h3>

      <div className="flex-auto text-center h-12"></div>
      {/* / 경로일 때 버튼 노출 (/dashboard 경로일 때 미노출) */}
      {pathname === PATHS.ROOT && currentData && (
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
