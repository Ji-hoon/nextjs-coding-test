"use client";

import { setLocalstorageWithUserInfo } from "@/src/utils/handleLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { surveyActions } from "@/src/store/survey.slice";
import { storeProps } from "@/src/global/types";
import { useEffect, useState } from "react";

export default function DashboardContent() {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const { registeredUserInfo } = useSelector(
    (state: storeProps) => state.survey
  );

  if (!isSaved) {
    //로컬 스토리지에 결과값 저장
    setIsSaved(true);
    setLocalstorageWithUserInfo(registeredUserInfo);
  }

  useEffect(() => {
    dispatch(surveyActions.resetUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>대시보드</>;
}
