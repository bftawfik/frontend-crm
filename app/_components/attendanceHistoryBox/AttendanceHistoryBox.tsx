interface AttendanceHistoryBoxProps {
  day: number
  month: string
  dayColor: string
}
const AttendanceHistoryBox = ({ day, month, dayColor }: AttendanceHistoryBoxProps) => {
  return (
    <div className={`flex w-20 flex-col items-center justify-center gap-1 rounded border px-4 py-3 ${dayColor}`}>
      <p className="text-sm font-bold capitalize text-gray-500">{day}</p>
      <p className="text-sm capitalize text-gray-500">{month}</p>
    </div>
  )
}

export default AttendanceHistoryBox
