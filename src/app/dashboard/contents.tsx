"use client";

import { setLocalstorageWithUserInfo } from "@/src/utils/handleLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { surveyActions } from "@/src/store/survey.slice";
import { storeProps } from "@/src/global/types";
import { useEffect, useState } from "react";
import Chart from "@/src/components/atoms/Chart";
import { LABELS, MESSAGES } from "@/src/global/constants";

export default function DashboardContent() {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const { isRegistered, registeredUserInfo } = useSelector(
    (state: storeProps) => state.survey
  );

  if (!isSaved && isRegistered) {
    //로컬 스토리지에 결과값 저장
    setIsSaved(true);
    setLocalstorageWithUserInfo(registeredUserInfo);
  }

  return (
    <>
      {isRegistered && (
        <>
          <h2 className="text-3xl font-semibold break-keep">
            {registeredUserInfo.memberName}님의 신체점수는{" "}
            <span className="text-sky-500">{registeredUserInfo.result}점</span>{" "}
            입니다.
            <br />
            {registeredUserInfo.result >= 15 ? (
              <>{MESSAGES.RESULT_HIGH}</>
            ) : registeredUserInfo.result >= 10 ? (
              <>{MESSAGES.RESULT_MIDDLE}</>
            ) : (
              <>{MESSAGES.RESULT_LOW}</>
            )}
          </h2>
          <div className="w-full h-px bg-gray-200 my-4"></div>
        </>
      )}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Chart title={LABELS.CHART_TOTAL} />
        <Chart title={LABELS.CHART_AVERAGE} />
        <Chart title={LABELS.CHART_STANDARD} />
      </div>
    </>
  );
}
