const Offers = () => {
  const offersData = [
    {
      id: 1,
      title: "50% OFF on Pizza",
      code: "PIZZA50",
      status: "Active",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Burger",
      code: "BURGERBOGO",
      status: "Active",
    },
    {
      id: 3,
      title: "Free Delivery Weekend",
      code: "FREEDEL",
      status: "Expired",
    },
    {
      id: 4,
      title: "Flat ₹100 OFF",
      code: "SAVE100",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-4">
      
      <div className="bg-white rounded-lg border shadow-sm">
        {offersData.map((offer) => (
          <div
            key={offer.id}
            className="flex items-center justify-between p-4 border-b last:border-none"
          >
            <div>
              <h2 className="font-semibold">{offer.title}</h2>
              <p className="text-sm text-gray-500">
                Code: {offer.code}
              </p>
            </div>

            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                offer.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {offer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
