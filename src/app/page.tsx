"use client";

import { useDispatch } from "react-redux";
import { surveyActions } from "@/src/store/survey.slice";

import Button from "../components/atoms/Button";
import Inputfield from "../components/atoms/Inputfield";
import { LABELS, MESSAGES, META, TYPES } from "../global/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "../global/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const { register, handleSubmit, setFocus } = useForm<FormValues>();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(surveyActions.resetUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.memberName || !data.teamName) {
      // TODO: data 밸리데이션 추후 공통 유틸 함수로 분리
      alert(MESSAGES.MISSING_FIELD);

      if (!data.teamName) {
        setFocus("teamName");
        return;
      }
      setFocus("memberName");
      return;
    }

    dispatch(surveyActions.registerInfo(data));
    router.replace("/questions/1"); // NOTE: 뒤로가기가 발생하지 않도록 push가 아닌 replace로 적용
  };

  return (
    <div className="page-container items-center justify-center">
      <h2 className="heading-2 max-w-md text-center">{META.DESC}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container max-w-[320px] pt-4 pb-6 flex-none"
      >
        <Inputfield
          register={register}
          name="teamName"
          type="text"
          placeholder={MESSAGES.PLACEHOLDER_TEAM_NAME}
          autoFocus={true}
        />
        <Inputfield
          register={register}
          name="memberName"
          type="text"
          placeholder={MESSAGES.PLACEHOLDER_MEMBER_NAME}
        />
        <div className="w-full mt-4 sm:mt-8"></div>
        <Button
          type={TYPES.SUBMIT}
          style={TYPES.PRIMARY_STYLE}
          label={LABELS.START_SURVEY}
          size={320}
        />
      </form>
    </div>
  );
}
