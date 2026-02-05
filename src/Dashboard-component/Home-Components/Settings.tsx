import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";

const Settings = () => {

  const [name, setName] = useState("Priyank");
  const [email, setEmail] = useState("admin@gmail.com");
  const [restaurant, setRestaurant] = useState("Swiggy Restaurant");
  const [address, setAddress] = useState("Dehradun, India");
  const [phone, setPhone] = useState("8057962712");
  const [time, setTime] = useState("10:00 AM - 11:00 PM");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings Saved");
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <Card>
        <CardContent className="p-5 space-y-4">
          <h2 className="font-semibold text-lg">Admin Profile</h2>

          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 space-y-4">
          <h2 className="font-semibold text-lg">Restaurant Info</h2>

          <Input
            placeholder="Restaurant Name"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />

          <Input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            placeholder="Opening Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 space-y-4">
          <h2 className="font-semibold text-lg">Account</h2>

          <Input
            type="password"
            placeholder="Change Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              className="bg-[#FF5533] hover:bg-[#e14a2a]"
              onClick={handleSave}
            >
              Save Settings
            </Button>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
