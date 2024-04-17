"use client";

import { LABELS, PATHS, TYPES } from "@/src/global/constants";
import Button from "../atoms/Button";
import { usePathname, useParams } from "next/navigation";
import { questions } from "@/src/global/questions";

export default function Footer() {
  const pathname = usePathname();
  const params = useParams();

  return (
    <>
      {pathname.includes(PATHS.QUESTION) && (
        <footer className="w-full border-t border-slate-200 p-4 flex items-center">
          {/* /question/1이 아닐 때만 이전 버튼 노출 */}
          {params.id !== "1" && (
            <Button type={TYPES.NORMAL} label={LABELS.GO_BACK} />
          )}
          <div className="flex-auto text-center"></div>
          {(params.id as string) === String(questions.length) ? (
            <Button type={TYPES.SUBMIT} label={LABELS.CONFIRM} />
          ) : (
            <Button type={TYPES.PRIMARY} label={LABELS.GO_NEXT} />
          )}
        </footer>
      )}
    </>
  );
}
