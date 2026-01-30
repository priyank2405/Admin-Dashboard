import AppAreaChart from "./Main-content/AppAreaChart";
import AppBarChart from "./Main-content/AppBarChart";
import AppPieChart from "./Main-content/AppPieChart";

// // Adjust these if they are in a different folder
// import CardList from "./CardList";
// import TodoList from "./TodoList";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>

      {/* <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div> */}

      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>

      {/* <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div> */}

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>

      {/* <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div> */}
    </div>
  );
};

export default Homepage;
