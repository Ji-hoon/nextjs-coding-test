"use client";

import { TYPES } from "@/src/global/constants";

export default function Button({
  type,
  label,
  size,
  onClick,
}: {
  type: string;
  label: string;
  size?: number;
  onClick?: () => {};
}) {
  return (
    <>
      {type === TYPES.NORMAL ? (
        <button className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 focus:outline-none text-sky-600 font-semibold h-12 px-6 rounded-lg flex items-center justify-center w-auto">
          {label}
        </button>
      ) : (
        <button
          type={type === TYPES.SUBMIT ? "submit" : undefined}
          className={`bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center ${
            size ? `w-[${size}px]` : `w-auto`
          }`}
        >
          {label}
        </button>
      )}
    </>
  );
}
