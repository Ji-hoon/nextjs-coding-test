"use client";

import Footer from "@/src/components/modules/Footer";
import {
  QuestionContentType,
  RegisterFormValues,
  storeProps,
} from "@/src/global/types";
import { redirect, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { surveyActions } from "@/src/store/survey.slice";
import RadioButton from "@/src/components/atoms/Radiobutton";

export default function Contents({ data }: { data: QuestionContentType }) {
  // NOTE: 등록된 정보가 없다면 root로 리다이렉트
  const { isRegistered } = useSelector((state: storeProps) => state.survey);
  if (!isRegistered) redirect("/");

  // TODO: RegisterFormValues가 아닌 각 스텝마다 다른 타입으로 변경 필요
  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    router.replace("/dashboard"); // TODO : 추후 상태 업데이트 코드 추가
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col flex-auto"
    >
      <div className="flex-auto">
        {data?.type === "RADIO" ? (
          <>{/* <RadioButton /> */}</>
        ) : data?.type === "CHECKBOX" ? (
          <>{/* <Checkbox /> */}</>
        ) : (
          <>{/* <Input /> */}</>
        )}
      </div>
      <Footer />
    </form>
  );
}
