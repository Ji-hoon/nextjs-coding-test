"use client";

import Footer from "@/src/components/modules/Footer";
import { storeProps } from "@/src/global/types";
import { useSelector } from "react-redux";

export default function Question({ params }: any) {
  const { isRegistered } = useSelector((state: storeProps) => state.survey);
  console.log(isRegistered);

  return (
    <form className="w-full h-full flex flex-col flex-auto ">
      <div className="flex-auto">
        <h2>{params.id}</h2>
      </div>
      <Footer />
    </form>
  );
}
