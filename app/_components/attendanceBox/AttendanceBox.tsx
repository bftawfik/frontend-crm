interface AttendanceBoxProps {
  label: string
  color: string
  count: number
}
const AttendanceBox = ({ label, count, color }: AttendanceBoxProps) => {
  return (
    <>
      <div className="mb-3 flex items-center gap-1">
        <div className={`h-3 w-3 rounded-full`} style={{ backgroundColor: color }}></div>
        <p className="text-sm capitalize">{label}</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 rounded-[10px] border border-gray-200 px-4 py-3">
        <p className="text-sm font-medium capitalize">{count} Days</p>
      </div>
    </>
  )
}

export default AttendanceBox
