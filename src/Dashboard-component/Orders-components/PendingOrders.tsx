const PendingOrders = () => {
  const pendingOrders = [
    {
      id: "#1031",
      customer: "Ankit Verma",
      item: "Paneer Butter Masala",
      amount: "₹280",
      status: "Pending",
    },
    {
      id: "#1032",
      customer: "Sneha Patel",
      item: "Veg Fried Rice",
      amount: "₹210",
      status: "Pending",
    },
    {
      id: "#1033",
      customer: "Ravi Kumar",
      item: "Chicken Roll",
      amount: "₹160",
      status: "Pending",
    },
    {
      id: "#1034",
      customer: "Pooja Singh",
      item: "Cheese Burger",
      amount: "₹190",
      status: "Pending",
    },
    {
      id: "#1035",
      customer: "Karan Mehta",
      item: "Veg Thali",
      amount: "₹300",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Item</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {pendingOrders.map((order, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3 font-medium">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.item}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default PendingOrders;
