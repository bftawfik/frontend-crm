import CircleProgressChart from "app/_components/circleProgressChart/CircleProgressChart"

const Page = () => {
  // charts data
  const circleChartData = [
    { name: "Contract", value: 100, color: "#9FB5C1" },
    { name: "Reservation", value: 20, color: "#D2DCE0" },
    { name: "EOI", value: 30, color: "#E6EEF1" },
  ]
  return (
    <div>
      <div className="bg-mainBg flex h-auto w-full flex-col gap-3 border-0 px-8 py-6 shadow-none">
        <CircleProgressChart data={circleChartData} label="total" />
      </div>
    </div>
  )
}

export default Page
