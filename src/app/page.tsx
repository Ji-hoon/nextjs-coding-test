"use client";

import { useDispatch, useSelector } from "react-redux";
import { surveyActions } from "@/src/store/survey.slice";

import Button from "../components/atoms/Button";
import Inputfield from "../components/atoms/Inputfield";
import { LABELS, MESSAGES, META, TYPES } from "../global/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormValues, storeProps } from "../global/types";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const { registeredUserInfo } = useSelector(
    (state: storeProps) => state.survey
  );

  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data); //TODO : 개발 완료 후 삭제
    if (!data.memberName || !data.teamName) {
      alert(MESSAGES.MISSING_FIELD);
      return;
    }

    dispatch(surveyActions.registerInfo(data));
    router.push("/questions/1");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-12 pb-10">
      <h1 className="max-w-md text-3xl font-bold text-center break-keep">
        {META.DESC}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[320px] flex flex-col gap-4"
      >
        <Inputfield
          register={register}
          name="teamName"
          type="text"
          placeholder="팀 명을 입력해주세요."
          defaultValue={registeredUserInfo?.teamName}
        />
        <Inputfield
          register={register}
          name="memberName"
          type="text"
          placeholder="이름을 입력해주세요."
          defaultValue={registeredUserInfo?.memberName}
        />
        <div className="w-full mt-8"></div>
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
