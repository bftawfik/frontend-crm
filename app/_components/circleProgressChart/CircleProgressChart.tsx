"use client"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

interface DataItem {
  name: string
  value: number
  color: string
}
interface CircleProgressChartProps {
  data: DataItem[]
  label: number | string
  strokeWidth?: number
  innerRadius?: number
  colors?: string[]
  height?: number
}

const CircleProgressChart: React.FC<CircleProgressChartProps> = ({
  data,
  label,
  innerRadius = 80,
  strokeWidth = 24,
  height = 220,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={innerRadius + strokeWidth}
          fill="transparent"
          dataKey="value"
          cornerRadius={20}
          paddingAngle={-10}
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={24} fontWeight={700}>
          {label}
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CircleProgressChart
