"use client";

import { setLocalstorageWithUserInfo } from "@/src/utils/handleLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { surveyActions } from "@/src/store/survey.slice";
import { storeProps } from "@/src/global/types";
import { useEffect } from "react";

export default function DashboardContent() {
  const dispatch = useDispatch();
  const { isRegistered, registeredUserInfo } = useSelector(
    (state: storeProps) => state.survey
  );

  useEffect(() => {
    //로컬 스토리지에 결과값 저장
    if (isRegistered) {
      setLocalstorageWithUserInfo(registeredUserInfo);
      // 리셋 디스패치 수행
      dispatch(surveyActions.resetUserInfo());
    }
  }, []);

  return <>대시보드</>;
}
