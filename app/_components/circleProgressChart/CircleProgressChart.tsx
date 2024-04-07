"use client"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

interface CircleProgressChartProps {
  data: ChartItem[]
  label?: React.ReactNode
  strokeWidth?: number
  innerRadius?: number
  colors?: string[]
  className?: string
}

const CircleProgressChart: React.FC<CircleProgressChartProps> = ({
  data,
  label,
  innerRadius = 80,
  strokeWidth = 30,
  className = "relative w-full max-h-[260px]  flex justify-center items-center",
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer height="100%"  aspect={1}>
        <PieChart height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={innerRadius + strokeWidth}
            fill="transparent"
            dataKey="value"
            cornerRadius={22}
            paddingAngle={-15}
          >
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{label}</div>
    </div>
  )
}

export default CircleProgressChart
