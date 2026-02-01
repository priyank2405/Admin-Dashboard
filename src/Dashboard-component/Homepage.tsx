import AppAreaChart from "./Main-content/AppAreaChart";
import AppBarChart from "./Main-content/AppBarChart";
import AppPieChart from "./Main-content/AppPieChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      
      {/* BAR CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>

      {/* PIE CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg h-[320px]">
        <AppPieChart />
      </div>

      {/* AREA CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>

    </div>
  );
};

export default Homepage;
