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
        name: "Brook",
        email: "brooksolo@gmail.com",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEmOnals1KEWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696569520491?e=1741219200&v=beta&t=GnYe5g3bLBnIHL00Rsf9A2hkdxTQQPE_5N6xFI2jF74",
    },
    teams: [
        { name: "Acme Inc", logo: Activity, plan: "Enterprise" },
    ],
    navMain: [
        {
            title: "Finance",
            url: "/finances",
            icon: Banknote,
            isActive: true,
            items: [
                { title: "View", url: "/finances" },
                { title: "Add", url: "/finances/create" },
            ],
        },
        {
            title: "Fitness",
            url: "/fitnesses",
            icon: Activity,
            isActive: false,
            items: [
                { title: "View", url: "/fitnesses" },
                { title: "Add", url: "/fitnesses/create" },
            ],
        },
        {
            title: "Diet",
            url: "/diets",
            icon: Apple,
            isActive: false,
            items: [
                { title: "View", url: "/diets" },
                { title: "Add", url: "/diets/create" },
            ],
        },
        {
            title: "Sleep",
            url: "/sleeps",
            icon: BedDouble,
            isActive: false,
            items: [
                { title: "View", url: "/sleeps" },
                { title: "Add", url: "/sleeps/create" },
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
