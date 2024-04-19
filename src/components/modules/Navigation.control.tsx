"use client";

import { LABELS, TYPES } from "@/src/global/constants";
import Button from "../atoms/Button";
import { getPage } from "@/src/utils/handlePage";

export default function Navigation_Control({
  page,
  length,
}: {
  page: number;
  length: number;
}) {
  return (
    <footer className="w-full flex items-center">
      {/* /question/1이 아닐 때만 이전 버튼 노출 */}
      {page !== 1 && (
        <Button
          type={TYPES.LINK}
          style={TYPES.NORMAL_STYLE}
          label={LABELS.GO_BACK}
          link={getPage("PREV", page)}
        />
      )}
      <div className="flex-auto text-center"></div>
      {page === length ? (
        <Button
          type={TYPES.SUBMIT}
          style={TYPES.PRIMARY_STYLE}
          label={LABELS.CONFIRM}
        />
      ) : (
        <Button
          type={TYPES.LINK}
          style={TYPES.PRIMARY_STYLE}
          label={LABELS.GO_NEXT}
          link={getPage("NEXT", page)}
        />
      )}
    </footer>
  );
}
