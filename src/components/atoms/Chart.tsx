import { ResponsiveBar } from "@nivo/bar";
import CustomTooltip from "./_chart.tooltip";
import { DataPropsType } from "@/src/global/types";

export default function Chart({
  title,
  data,
  color,
}: {
  title: string;
  data: DataPropsType[];
  color: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold py-2">{title}</h3>
      <div className="h-[320px] w-full">
        {data && (
          <ResponsiveBar
            data={data}
            keys={["SUM", "AVG", "SD"]}
            indexBy="teamName"
            margin={{ top: 20, right: 40, bottom: 40, left: 80 }}
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
              legendOffset: -48,
              truncateTickAt: 0,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
          />
        )}
      </div>
    </div>
  );
}
