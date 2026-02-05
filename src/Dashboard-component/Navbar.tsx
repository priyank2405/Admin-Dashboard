import { LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { SidebarTrigger } from "../components/ui/sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      <div className="flex items-center">
        <SidebarTrigger />

        <h1 className="text-[20px] font-bold text-[#FF5533] ml-4">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/" className="font-medium">
          Priyank
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
              <Avatar>
                <AvatarImage src=".\public\custom-logo.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              className="text-red-500 cursor-pointer"
              onClick={() => {
                localStorage.removeItem("isAdmin");
                window.location.reload();
              }}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
