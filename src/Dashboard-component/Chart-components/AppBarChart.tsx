import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  Online: {
    label: "Online Orders",
    color: "var(--chart-1)",
  },
  Offline: {
    label: "Offline Orders",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", online: 420, offline: 180 },
  { month: "Feb", online: 510, offline: 220 },
  { month: "Mar", online: 480, offline: 260 },
  { month: "Apr", online: 650, offline: 300 },
  { month: "May", online: 720, offline: 340 },
  { month: "Jun", online: 810, offline: 390 },
];


const AppBarChart = () => {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-lg font-medium mb-2">Total Revenue</h1>
      
      <div className="flex-1">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />

          <YAxis tickLine={false} tickMargin={10} axisLine={false} />

          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />

          <Bar dataKey="online" fill="var(--chart-1)" radius={4} />
          <Bar dataKey="offline" fill="var(--chart-4)" radius={4} />
        </BarChart>
      </ChartContainer>
      </div>
    </div>
  );
};

export default AppBarChart;
