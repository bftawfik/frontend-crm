import React from "react"

const TabsComponent = () => {
  return (
    <div className="box-border flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg">
      <div className="h-[53px] w-full shrink-0 rounded-lg bg-white "> tabs</div>
      <div className="overflow-y-auto">
        <div className="h-[5000px] rounded-lg bg-white"></div>
      </div>
    </div>
  )
}

export default TabsComponent
