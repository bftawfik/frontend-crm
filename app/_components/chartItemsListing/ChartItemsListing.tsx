import React from "react"

interface ChartItemsListingProps {
  className?: string
  chartData: ChartItem[]
}

const ChartItemsListing: React.FC<ChartItemsListingProps> = ({
  chartData,
  className = "flex w-full flex-col gap-4",
}) => {
  return (
    <div className={className}>
      {chartData.map((item, ndx) => (
        <div className="flex items-center justify-between gap-4" key={ndx}>
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            <div>{item.name}</div>
          </div>
          {item.value}
        </div>
      ))}
    </div>
  )
}

export default ChartItemsListing
