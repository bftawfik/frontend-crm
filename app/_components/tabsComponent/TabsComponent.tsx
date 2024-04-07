import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"
interface TabsListItem {
  id: number
  tabTitle: TabTitle
  TabContent: () => React.JSX.Element
}
export enum TabTitle {
  deals = "deals",
  commitions = "commitions",
  performance = "performance",
  attendance = "attendance",
  activities = "activities",
}
interface TabsComponentProps {
  tabs: TabsListItem[]
  activeTab?: TabTitle
}
const TabsComponent = ({ tabs, activeTab }: TabsComponentProps) => {
  const currentTab = activeTab ? activeTab : TabTitle.deals
  return (
    <Tabs
      defaultValue={currentTab}
      orientation="vertical"
      className="box-content flex h-full w-full flex-col gap-4 overflow-hidden"
    >
      <TabsList className="box-content flex max-w-full shrink-0  justify-between overflow-x-auto rounded-[8px] bg-white p-[6px]">
        {tabs.map(({ id, tabTitle }) => (
          <TabsTrigger
            key={id}
            value={tabTitle}
            className="rounded-[6px] p-[10px] text-sm font-medium capitalize text-[#7E8299] ring-offset-0  focus-visible:ring-0 active:text-black data-[state=active]:bg-[#F5F8FA]"
          >
            {tabTitle}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ id, tabTitle, TabContent }) => (
        <TabsContent className="mt-0 overflow-y-auto" key={id} value={tabTitle}>
          <TabContent />
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TabsComponent
