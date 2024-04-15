"use client"

import React from "react"
import { Bar, BarChart, BarProps, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import CustomRechartBar from "../customRechartBar/CustomRechartBar"

interface CustomizedBarChartProps {
  data: BarChartItem[]
  barColor?: string
}

const CustomizedBarChart: React.FC<CustomizedBarChartProps> = ({ data }) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 5" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#B5B5C3", fontSize: 12 }}
            tickMargin={20}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#B5B5C3", fontSize: 12 }}
            tickMargin={40}
            textAnchor="start"
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="barValue"
            barSize={30}
            shape={(props: BarProps) => (
              <CustomRechartBar
                x={props.x as number}
                y={props.y as number}
                width={props.width as number}
                height={props.height as number}
                borderRadius={8}
                gap={4}
              />
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomizedBarChart
