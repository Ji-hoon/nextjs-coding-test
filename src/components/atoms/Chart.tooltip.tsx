import { DataPropsType } from "@/src/global/types";
import { BarTooltipProps } from "@nivo/bar";

export default function ChartCustomTooltip(
  tooltip: BarTooltipProps<Omit<DataPropsType, "DIFF_SUM">>
) {
  return (
    <div className=" bg-white rounded-sm px-4 py-2 text-md z-10 shadow-xl">
      <p className="flex gap-2 items-center m-0 text-slate-800">
        <em
          className="w-[16px] h-[16px] rounded-sm"
          style={{ backgroundColor: tooltip.color }}
        ></em>
        <span>
          [{tooltip.indexValue}]팀의{" "}
          {tooltip.id === "SUM"
            ? "합계"
            : tooltip.id === "AVG"
            ? "평균"
            : "표준 편차"}
        </span>
      </p>
      <span className="text-lg font-bold">{tooltip.value}점</span>
    </div>
  );
}
