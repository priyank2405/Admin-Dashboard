import AppAreaChart from "../Chart-components/AppAreaChart";
import AppBarChart from "../Chart-components/AppBarChart";
import AppPieChart from "../Chart-components/AppPieChart";
import AppLineChart from "../Chart-components/AppLineChart";
import OrderCard from "../Cards/OrderCards";

const Homepage = () => {
  return (
    <div className="space-y-4">
    <OrderCard />
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-1 2xl:col-span-2">
        <AppPieChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-2">
        <AppAreaChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg h-[320px] lg:col-span-1 2xl:col-span-2">
        <AppLineChart />
      </div>
    </div>
     </div>
  );
};

export default Homepage;
