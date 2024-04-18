"use client";

import { TYPES } from "@/src/global/constants";
import Link from "next/link";

export default function Button({
  type,
  style,
  label,
  size,
  link,
  onClick,
}: {
  type: string;
  style: string;
  label: string;
  size?: number;
  link?: string;
  onClick?: () => {};
}) {
  return (
    <>
      {type === TYPES.LINK ? (
        <Link
          href={link || "#"}
          className={` ${
            style === TYPES.NORMAL_STYLE ? `btn-normal` : `btn-primary`
          } w-auto`}
        >
          {label}
        </Link>
      ) : (
        <button
          type={type === TYPES.SUBMIT ? "submit" : undefined}
          className={` ${
            style === TYPES.NORMAL_STYLE ? `btn-normal` : `btn-primary`
          } ${size ? `w-[${size}px]` : `w-auto`}`}
        >
          {label}
        </button>
      )}
    </>
  );
}
