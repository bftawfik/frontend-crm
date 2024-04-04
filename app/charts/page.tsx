import ChartItemsListing from "app/_components/chartItemsListing/ChartItemsListing"
import CircleProgressChart from "app/_components/circleProgressChart/CircleProgressChart"
import SectionWrapper from "app/_components/sectionWrapper/SectionWrapper"

const Page = () => {
  // charts data
  const circleChartData = [
    { name: "Contract", value: 12, color: "#9FB5C1" },
    { name: "Reservation", value: 5, color: "#D2DCE0" },
    { name: "EOI", value: 8, color: "#E6EEF1" },
  ]
  const totalDeals = circleChartData.reduce((total, item) => total + item.value, 0)

  return (
    <section className="bg-gray-sm relative box-border flex h-screen w-full flex-col gap-4 p-4">
      <SectionWrapper>
        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
          <ChartItemsListing chartData={circleChartData} />
          <CircleProgressChart
            data={circleChartData}
            label={
              <div className="flex flex-col items-center justify-center gap-1 ">
                <p className="text-left text-sm text-[#b5b5c3]">Total Deals</p>
                <span className="text-left text-lg font-bold text-black">{totalDeals}</span>
              </div>
            }
          />
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Page
