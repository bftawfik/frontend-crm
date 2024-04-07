"use client"

import React from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface BarChartWith2LinesProps {
  data: BarChartItem[]
  bar1Color?: string
  bar2Color?: string
}
const BarChartWith2Lines: React.FC<BarChartWith2LinesProps> = ({
  data,
  bar1Color = "#A0B5C1",
  bar2Color = "#EFF2F5",
}) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="bar1Value" fill={bar1Color} radius={50} barSize={10} />
          <Bar dataKey="bar2Value" fill={bar2Color} radius={50} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartWith2Lines
