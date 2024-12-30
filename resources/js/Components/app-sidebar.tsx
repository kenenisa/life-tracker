import * as React from "react";
import { Banknote, Activity, Apple, BedDouble } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    { name: "Acme Inc", logo: Activity, plan: "Enterprise" },
    { name: "Acme Corp.", logo: Banknote, plan: "Startup" },
    { name: "Evil Corp.", logo: Apple, plan: "Free" },
  ],
  navMain: [
    {
      title: "Finance",
      url: "/finance",
      icon: Banknote,
      isActive: true,
      items: [
        { title: "View", url: "/finance/view" },
        { title: "Add", url: "/finances/add" },
      ],
    },
    {
      title: "Fitness",
      url: "/fitness",
      icon: Activity,
      isActive: false,
      items: [
        { title: "View", url: "/fitness/view" },
        { title: "Add", url: "/fitness/add" },
      ],
    },
    {
      title: "Diet",
      url: "/diet",
      icon: Apple,
      isActive: false,
      items: [
        { title: "View", url: "/diet/view" },
        { title: "Add", url: "/diet/add" },
      ],
    },
    {
      title: "Sleep",
      url: "/sleep",
      icon: BedDouble,
      isActive: false,
      items: [
        { title: "View", url: "/sleep/view" },
        { title: "Add", url: "/sleep/add" },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
