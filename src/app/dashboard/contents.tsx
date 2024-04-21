"use client";

import {
  getLocalStorageData,
  setLocalstorageWithUserInfo,
} from "@/src/utils/handleLocalStorage";
import { useSelector } from "react-redux";
import { RegisterFormValues, storeProps } from "@/src/global/types";
import { useEffect, useMemo, useState } from "react";
import Chart from "@/src/components/atoms/Chart";
import { COLORS, LABELS, MESSAGES, THRESHOLD } from "@/src/global/constants";
import { calcResultData } from "@/src/utils/handleResultData";
import { redirect } from "next/navigation";

export default function DashboardContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [localData, setLocalData] = useState<RegisterFormValues[]>();
  const { isRegistered, registeredUserInfo } = useSelector(
    (state: storeProps) => state.survey
  );

  if (!isSaved && isRegistered) {
    //로컬 스토리지에 결과값 저장
    setIsSaved(true);
    setLocalstorageWithUserInfo(registeredUserInfo);
  }

  useEffect(() => {
    const localData = getLocalStorageData();
    if (!localData) redirect("/"); // NOTE: 저장된 데이터가 없다면 root로 리다이렉트

    setLocalData(localData);
  }, []);

  const results = useMemo(() => {
    const initData = {
      teamName: "",
      memberCount: 0,
      SUM: 0,
      AVG: 0,
      DIFF_SUM: [],
      SD: 0,
    };
    return calcResultData(localData, initData);
  }, [localData]);

  return (
    <>
      {isRegistered && (
        <>
          <h2 className="text-3xl font-semibold break-keep">
            [{registeredUserInfo.teamName}팀] {registeredUserInfo.memberName}
            님의 신체점수는{" "}
            <span className="text-sky-500">
              {registeredUserInfo.result}점
            </span>{" "}
            입니다.
            <br />
            {registeredUserInfo.result >= THRESHOLD.HIGH ? (
              <>{MESSAGES.RESULT_HIGH}</>
            ) : registeredUserInfo.result >= THRESHOLD.MIDDLE ? (
              <>{MESSAGES.RESULT_MIDDLE}</>
            ) : (
              <>{MESSAGES.RESULT_LOW}</>
            )}
          </h2>
          <div className="w-full h-px bg-gray-200 my-4"></div>
        </>
      )}
      {!localData && (
        <h3 className="flex flex-auto items-center justify-center">
          표시할 데이터가 없습니다.
        </h3>
      )}
      {localData && results !== undefined && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Chart
            title={LABELS.CHART_TOTAL}
            data={results}
            color={COLORS.GREEN}
            type="SUM"
          />
          <Chart
            title={LABELS.CHART_AVERAGE}
            data={results}
            color={COLORS.BLUE}
            type="AVG"
          />
          <Chart
            title={LABELS.CHART_STANDARD}
            data={results}
            color={COLORS.PINK}
            type="SD"
          />
        </div>
      )}
    </>
  );
}
