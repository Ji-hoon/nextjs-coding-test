"use client";

import Navigation_Control from "@/src/components/modules/Navigation.control";
import {
  QuestionContentType,
  RegisterFormFieldType,
  FormValues,
  storeProps,
} from "@/src/global/types";
import { redirect, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { surveyActions } from "@/src/store/survey.slice";
import RadioButton from "@/src/components/atoms/Radiobutton";
import Inputfield from "@/src/components/atoms/Inputfield";

export default function Contents({
  data,
  length,
  page,
}: {
  data: QuestionContentType;
  length: number;
  page: string;
}) {
  // NOTE: 등록된 정보가 없다면 root로 리다이렉트
  const { isRegistered } = useSelector((state: storeProps) => state.survey);
  if (!isRegistered) redirect("/");

  // TODO: RegisterFormValues가 아닌 각 스텝마다 다른 타입으로 변경 필요
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    router.replace("/dashboard"); // TODO : 추후 상태 업데이트 코드 추가
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col flex-auto"
    >
      <div className="flex-auto py-8 w-[320px]">
        {data &&
          data.options &&
          data.options.map((option, index) => {
            if (data.type === "RADIO") {
              return <div key={index}>{option}</div>;
            }
            if (data.type === "CHECKBOX") {
              return <div key={index}>{option}</div>;
            }
          })}
        {data && data.ranges && (
          <div className="flex items-center w-[100px] gap-2">
            <Inputfield
              register={register}
              name={data?.name as RegisterFormFieldType}
              type="number"
              min={data.ranges[0]}
              max={data.ranges[1]}
            />
            <span>분</span>
          </div>
        )}
      </div>
      <Navigation_Control length={length} page={parseInt(page)} />
    </form>
  );
}
