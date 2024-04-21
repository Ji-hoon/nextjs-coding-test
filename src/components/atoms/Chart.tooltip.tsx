import { LABELS } from "@/src/global/constants";
import { DataPropsType } from "@/src/global/types";
import { BarTooltipProps } from "@nivo/bar";

export default function ChartCustomTooltip(
  tooltip: BarTooltipProps<Omit<DataPropsType, "DIFF_SUM">>
) {
  return (
    <div className="border border-slate-200/90 bg-white rounded-md px-4 py-2 text-md z-10 shadow-lg">
      <p className="flex gap-2 items-center m-0 text-slate-800">
        <span>
          [{tooltip.indexValue}팀]의{" "}
          {tooltip.id === "SUM"
            ? LABELS.TOTAL
            : tooltip.id === "AVG"
            ? LABELS.AVERAGE
            : LABELS.STANDARD_DEVIATION}
        </span>
        <em
          className="w-[16px] h-[16px] rounded-sm"
          style={{ backgroundColor: tooltip.color }}
        ></em>
      </p>
      <span className="text-lg font-bold">{tooltip.value}점</span>
    </div>
  );
}
