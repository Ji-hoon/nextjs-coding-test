import Link from "next/link";
import Button from "../components/atoms/Button";
import Inputfield from "../components/atoms/Inputfield";
import { LABELS, META, TYPES } from "../global/constants";

export default function RootPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-12 pb-10">
      <h1 className="max-w-md text-3xl font-bold text-center break-keep">
        {META.DESC}
      </h1>
      <div className="w-[320px] flex flex-col gap-4">
        <Inputfield
          name="teamName"
          type="text"
          placeholder="팀 명을 입력해주세요."
        />
        <Inputfield
          name="memberName"
          type="text"
          placeholder="이름을 입력해주세요."
        />
        <Link href="/questions/1" className="w-full mt-8">
          <Button
            type={TYPES.SUBMIT}
            style={TYPES.PRIMARY_STYLE}
            label={LABELS.START_SURVEY}
            size={320}
          />
        </Link>
      </div>
    </div>
  );
}
