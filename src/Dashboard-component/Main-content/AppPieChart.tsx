import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  orders: {
    label: "orders",
  },
  Pizza: {
    label: "Pizza",
    color: "var(--chart-1)",
  },
  Burgers: {
    label: "Burgers",
    color: "var(--chart-2)",
  },
  "Main Course": {
    label: "Main Course",
    color: "var(--chart-3)",
  },
  Drinks: {
    label: "Drinks",
    color: "var(--chart-4)",
  },
  Desserts: {
    label: "Desserts",
    color: "var(--chart-5)",
  },
   other: {
    label: "Other",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

const chartData = [
  { category: "Pizza", orders: 320, fill: "var(--chart-1)" },
  { category: "Burgers", orders: 260, fill: "var(--chart-2)" },
  { category: "Main Course", orders: 386, fill: "var(--chart-3)" },
  { category: "Drinks", orders: 210, fill: "var(--chart-4)" },
  { category: "Desserts", orders: 170, fill: "var(--chart-5)" },
  { category: "other", orders: 110, fill: "var(--chart-6)" },
];


const AppPieChart = () => {
  const totalOrders = chartData.reduce(
    (acc, curr) => acc + curr.orders,
    0
  );

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-lg font-medium mb-6">Food Category Sales</h1>

      <ChartContainer
        config={chartConfig}
        className="h-full w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Pie
            data={chartData}
            dataKey="orders"
            nameKey="category"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {

                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalOrders.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Orders
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Orders for the last 6 months
        </div>
      </div>
    </div>
  );
};

export default AppPieChart;
