import { ResponsiveBar } from "@nivo/bar";
import ChartCustomTooltip from "./Chart.tooltip";
import { DataPropsType } from "@/src/global/types";

export default function Chart({
  title,
  data,
  color,
  type,
}: {
  title: string;
  data: Omit<DataPropsType, "DIFF_SUM">[];
  color: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="heading-3 ">{title}</h3>
      <div className="h-[320px] w-full">
        {data && (
          <ResponsiveBar<Omit<DataPropsType, "DIFF_SUM">>
            data={data}
            keys={[type]}
            indexBy="teamName"
            margin={{ top: 20, right: 20, bottom: 24, left: 60 }}
            padding={0.35}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={color}
            layout="vertical"
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            motionConfig="gentle"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: 32,
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "점수",
              legendPosition: "middle",
              legendOffset: -36,
              truncateTickAt: 0,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            tooltip={ChartCustomTooltip}
          />
        )}
      </div>
    </div>
  );
}
