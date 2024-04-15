import clsx from "clsx"
import React from "react"
import { numberFormatter } from "app/_helpers/numberFormatter"
import RoundedTriangleIcon from "../svgs/RoundedTriangleIcon"

interface CommissionMilestoneProgressBarProps {
  total: number
  points: number[]
  unit?: string
  readyToCollect?: number
}

const CommissionMilestoneProgressBar: React.FC<CommissionMilestoneProgressBarProps> = ({
  total,
  points,
  unit,
  readyToCollect,
}) => {
  // Calculate cumulative percentage
  const cumulativePoints = points?.reduce((acc: number[], curr: number, index) => {
    return [...acc, index === 0 ? curr : (acc?.[index - 1] || 0) + curr]
  }, [] as number[])

  const totalEarned = points.reduce((total, item) => total + item, 0)

  const styles = {
    subtitle: "text-xs font-medium text-[#b5b5c3]",
    subtitleValue: "text-base font-semibold text-[#464e5f]",
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className={styles.subtitle}>Total Earning</p>
        <div className="flex items-center gap-2">
          <div className="h-[10px] w-[10px] rounded-full bg-[#00BC70]" />
          <p className={styles.subtitleValue}>
            {numberFormatter(totalEarned)} {unit}
          </p>
        </div>
      </div>
      <div className="relative h-1 w-full rounded-full bg-[#EFF2F5]">
        <div
          className="absolute left-0 top-0 h-full w-full rounded-full bg-[#9FB5C1]"
          style={{
            width: `${((cumulativePoints?.[points.length - 1] ?? 0) / total) * 100}%`,
          }}
        />

        {/* Milestone points */}
        {points?.map((point, index) => (
          <div
            key={index}
            className="absolute -top-1"
            style={{
              left: `${((cumulativePoints[index] ?? 0) / total) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="border-1 relative h-[14px] w-[14px] rounded-full border border-black bg-white">
              <div className="absolute top-[-15px] flex min-w-[100px] flex-nowrap items-center gap-1">
                <RoundedTriangleIcon className="text-[#00BC70]" />
                <p className="text-[10px]">
                  {numberFormatter(point)} {unit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className={styles.subtitle}>Ready to collect</p>
          {readyToCollect ? (
            <p className={styles.subtitleValue}>
              {numberFormatter(readyToCollect)} {unit}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <p className={styles.subtitle}>Remaining</p>
          <p className={clsx(styles.subtitleValue, "flex items-center gap-2")}>
            <div className="h-[10px] w-[10px] rounded-full bg-[#00BC70]" />
            {numberFormatter(total - totalEarned)} {unit}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommissionMilestoneProgressBar
