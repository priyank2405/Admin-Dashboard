import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  customers: {
    label: "customers",
    color: "var(--chart-2)",
  },
  orders: {
    label: "orders",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", customers: 220, orders: 120 },
  { month: "Feb", customers: 300, orders: 180 },
  { month: "Mar", customers: 280, orders: 210 },
  { month: "Apr", customers: 390, orders: 320 },
  { month: "May", customers: 420, orders: 370 },
  { month: "Jun", customers: 510, orders: 350 },
];

const AppAreaChart = () => {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-lg font-medium mb-2">Customer & Orders Growth</h1>

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
              dataKey="customers"
              type="natural"
              stroke="var(--chart-2)"
              fill="var(--chart-2)"
              fillOpacity={0.2}
            />

            <Area
              dataKey="orders"
              type="natural"
              stroke="var(--chart-1)"
              fill="var(--chart-1)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AppAreaChart;
