import AppAreaChart from "./Main-content/AppAreaChart";
import AppBarChart from "./Main-content/AppBarChart";
import AppPieChart from "./Main-content/AppPieChart";
import AppLineChart from "./Main-content/AppLineChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-1 2xl:col-span-2">
        <AppPieChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-2">
        <AppAreaChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-1 2xl:col-span-2">
        <AppLineChart />
      </div>
    </div>
  );
};

export default Homepage;
