import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 4200, profit: 1200 },
  { month: "Feb", revenue: 5200, profit: 1800 },
  { month: "Mar", revenue: 4800, profit: 1500 },
  { month: "Apr", revenue: 6500, profit: 2400 },
  { month: "May", revenue: 7200, profit: 2800 },
  { month: "Jun", revenue: 8100, profit: 3200 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  profit: {
    label: "profit",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <div className="h-full flex flex-col">
    <h1 className="text-lg font-medium mb-2">Revenue & Profit Trend</h1>

      <div className="flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis tickLine={false} axisLine={false} tickMargin={8} />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--chart-1)"
              strokeWidth={3}
              dot={false}
            />

            <Line
              dataKey="profit"
              type="monotone"
              stroke="var(--chart-2)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AppLineChart;
