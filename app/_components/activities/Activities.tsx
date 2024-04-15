import React from "react"
import { Meeting, Phone } from "../svgs"
import TotalActivitiesCard from "../totalActivitiesCard/TotalActivitiesCard"

const Activities = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-wrap gap-4 lg:flex-nowrap">
        <TotalActivitiesCard title="Q2 Total Calls" amount="1.190" percentage="1.8" upFrom="Q1" icon={Phone} />
        <TotalActivitiesCard title="Q2 Total Meetings" amount="110" percentage="2" upFrom="Q1" icon={Meeting} />
      </div>
    </div>
  )
}

export default Activities
