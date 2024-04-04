import { Metadata } from "next"

import Deals from "./_components/deals/Deals"
import Header from "./_components/header/Header"
import SideMenu from "./_components/sideMenu/SideMenu"
import TabsComponent, { TabTitle } from "./_components/tabsComponent/TabsComponent"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  const tabs = [
    { id: 1, tabTitle: TabTitle.deals, TabContent: Deals },
    { id: 2, tabTitle: TabTitle.commitions, TabContent: Deals },
    { id: 3, tabTitle: TabTitle.performance, TabContent: Deals },
    { id: 4, tabTitle: TabTitle.attendance, TabContent: Deals },
    { id: 5, tabTitle: TabTitle.activities, TabContent: Deals },
  ]
  return (
    <section className="relative box-border flex h-screen w-full gap-4 bg-gray-sm p-4">
      <SideMenu />
      <div className="flex h-full w-full  flex-col gap-4">
        <Header />
        <div className="box-border flex h-[calc(100vh-111px)] gap-4">
          <div className="h-full w-[360px] rounded-lg bg-white">profile</div>
          <TabsComponent tabs={tabs} activeTab={TabTitle.deals} />
        </div>
      </div>
    </section>
  )
}
