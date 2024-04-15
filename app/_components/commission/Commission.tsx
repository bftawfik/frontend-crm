import React from "react"
import CommissionMilestoneProgressBar from "../commissionMilestoneProgressBar/CommissionMilestoneProgressBar"
import SectionHeader from "../sectionHeader/SectionHeader"
import SectionWrapper from "../sectionWrapper/SectionWrapper"

const Commission = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionWrapper className="shadow-main flex w-full gap-[30px] rounded-xl border-0 bg-white px-8 py-[18px] flex-col">
        <SectionHeader
          title="total commission"
          subtitle="200.000 EGP"
        />
        <CommissionMilestoneProgressBar readyToCollect={35000} total={200000} points={[50000,50000,50000]} unit="EGP" />
      </SectionWrapper>
    </div>
  )
}

export default Commission
