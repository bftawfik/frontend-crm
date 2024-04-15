"use client"
import { Separator } from "components/ui/separator"
import AttendanceBox from "../attendanceBox/AttendanceBox"
import AttendanceHistoryBox from "../attendanceHistoryBox/AttendanceHistoryBox"
import SectionWrapper from "../sectionWrapper/SectionWrapper"

const attendanceStatsList = [
  {
    label: "Attend",
    color: "#008C4D",
    count: 14,
  },
  {
    label: "Absence",
    color: "#FF2D44",
    count: 2,
  },
  {
    label: "day deduction",
    color: "#934BFA",
    count: 5,
  },
]

const checkedDays = [2, 3, 5, 4, 7, 8, 9]
const AttendanceTabContent = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const currentDayOfMonth = currentDate.getDate()

  const numberOfDaysInMonth = new Date(currentYear, currentMonth, 0).getDate()
  const daysArray = Array.from({ length: numberOfDaysInMonth }, (_, index) => index + 1)

  const getDayColorStats = (dayNumber: number) => {
    return checkedDays.includes(dayNumber)
      ? "bg-green-50 border-green-500"
      : dayNumber <= currentDayOfMonth
      ? "bg-red-50 border-red-500"
      : "bg-gray-50 border-gray-200"
  }
  return (
    <SectionWrapper>
      <p className="text-sm font-medium">Attendance</p>
      <Separator />
      <div className="my-5 grid w-full grid-cols-3 gap-4">
        {attendanceStatsList.map((stats, index) => {
          return (
            <div key={index}>
              <AttendanceBox count={stats.count} color={stats.color} label={stats.label} />
            </div>
          )
        })}
      </div>
      <p className="text-sm font-medium">Attendance History</p>
      <div className="grid w-full grid-cols-8 gap-4">
        {daysArray.map((dayNumber, index) => {
          const currentDay = new Date(currentYear, currentMonth - 1, dayNumber)
          const dayName = currentDay.toLocaleDateString("en-US", { weekday: "short" })
          return (
            <div key={index}>
              <AttendanceHistoryBox day={dayNumber} month={dayName} dayColor={getDayColorStats(dayNumber)} />
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default AttendanceTabContent
