import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];


const AppAreaChart = () => {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-lg font-medium mb-4">Total Visitors</h1>

      <div className="flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => v.slice(0, 3)}
            />

            <YAxis tickLine={false} axisLine={false} />

            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />

            <Area
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              fill="var(--color-desktop)"
              fillOpacity={0.2}
            />

            <Area
              dataKey="mobile"
              type="natural"
              stroke="var(--color-mobile)"
              fill="var(--color-mobile)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AppAreaChart;
