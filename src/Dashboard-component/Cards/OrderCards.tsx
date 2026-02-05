import { Card, CardContent } from "../../components/ui/card";
import { TrendingUp } from "lucide-react";

const stats = [
  { title: "Total Orders", value: "1,456" },
  { title: "Fulfilled Orders", value: "1,006" },
  { title: "Cancelled Orders", value: "400" },
  { title: "Refund Orders", value: "50" },
  { title: "Delayed Orders", value: "10" },
];

const OrderCard = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center border-r last:border-r-0 pr-6"
            >
              <p className="text-sm text-muted-foreground">
                {item.title}
              </p>

              <div className="flex items-center gap-2 mt-1">
                <p className="text-3xl font-bold">
                  {item.value}
                </p>

                {item.title === "Total Orders" && (
                  <TrendingUp  className="text-green-500 ml-6" size={30} />
                )}
              </div>
            </div>
          ))}

        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
