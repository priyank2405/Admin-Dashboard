import {
  Home,
  Inbox,
  Calendar,
  TicketPercent,
  Settings,
  CirclePlus,
  Projector,
  ChevronDown,
  Clock,
  CircleDashed,
  Undo2,
  Boxes,
  Hamburger,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../components/ui/sidebar";

import { Link, useLocation } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";

const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Offers", url: "/offers", icon: TicketPercent },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4 flex items-center justify">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/" className="flex items-center gap-2 ml-6">
                <img
                  src=".\public\logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <span className="text-[20px] font-bold text-[#FF5533]">
                  SWIGGY
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full rounded-md
                      ${
                        location.pathname === item.url
                          ? "!bg-[#FF5533] !text-white hover:!bg-[#FF5533]"
                          : ""
                      }
                    `}
                  >
                    <Link
                      to={item.url}
                      className="flex items-center gap-2 px-3 py-2 w-full"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>

                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>5</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center">
                Orders Group
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={`w-full rounded-md
                        ${
                          location.pathname === "/orders/history"
                            ? "!bg-[#FF5533] !text-white hover:!bg-[#FF5533]"
                            : ""
                        }
                      `}
                    >
                      <Link
                        to="/orders/history"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <Clock />
                        Order History
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={`w-full rounded-md
                        ${
                          location.pathname === "/orders/pending"
                            ? "!bg-[#FF5533] !text-white hover:!bg-[#FF5533]"
                            : ""
                        }
                      `}
                    >
                      <Link
                        to="/orders/pending"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <CircleDashed />
                        Pending Orders
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={`w-full rounded-md
                        ${
                          location.pathname === "/orders/returns"
                            ? "!bg-[#FF5533] !text-white hover:!bg-[#FF5533]"
                            : ""
                        }
                      `}
                    >
                      <Link
                        to="/orders/returns"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <Undo2 />
                        Return Orders
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center">
                Menu
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        to="#"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <Projector />
                        Restaurant Menu
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        to="#"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <CirclePlus />
                        Add Items
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        to="#"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <Boxes />
                        Add Combos
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        to="#"
                        className="flex items-center gap-2 px-3 py-2 w-full"
                      >
                        <Hamburger />
                        Add Meals
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
