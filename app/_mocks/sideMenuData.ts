import { CilsIcon, DashboardIcon, DealsIcon, LeadsIcon, LogoutIcon, SettingsIcon } from "app/_components/svgs"

const handleButtonClick = (id: string) => {
  console.log(id)
}
export const sideMenuData = {
  section1: [
    {
      id: 1,
      title: "Dashboard",
      icon: DashboardIcon,
      handler: () => handleButtonClick("Deals"),
    },
    {
      id: 2,
      title: "Deals",
      icon: DealsIcon,
      handler: () => handleButtonClick("Deals"),
    },
    {
      id: 3,
      title: "Leads",
      icon: LeadsIcon,
      handler: () => handleButtonClick("Deals"),
    },
    {
      id: 4,
      title: "CILS",
      icon: CilsIcon,
      handler: () => handleButtonClick("CILS"),
    },
    {
      id: 5,
      title: "Projects",
      icon: CilsIcon,
      handler: () => handleButtonClick("Projects"),
    },
    {
      id: 6,
      title: "Developers",
      icon: CilsIcon,
      handler: () => handleButtonClick("Developers"),
    },
    {
      id: 6,
      title: "My Team",
      icon: CilsIcon,
      handler: () => handleButtonClick("My Team"),
    },
  ],
  section2: [
    {
      id: 1,
      title: "Settings",
      icon: SettingsIcon,
      handler: () => handleButtonClick("Settings"),
    },
    {
      id: 2,
      title: "Log out",
      icon: LogoutIcon,
      handler: () => handleButtonClick("Log out"),
    },
  ],
}
