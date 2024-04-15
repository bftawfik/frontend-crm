import React from "react"

interface CustomRechartBarProps {
  x: number
  y: number
  width: number
  height: number
  borderRadius?: number
  bar1Color?: string
  bar2Color?: string
  gap?: number
}
const CustomRechartBar = ({
  x,
  y,
  width,
  height,
  borderRadius = 0,
  bar1Color = "#A0B5C1",
  bar2Color = "#EFF2F5",
}: CustomRechartBarProps) => {
  const barWidth = width / 3 // Divide width by 2 for two bars and subtract gap for margin
  const marginLeft = barWidth
  return (
    <g>
      {/* First bar */}
      <rect x={x} y={y} width={barWidth} height={height} ry={borderRadius} fill={bar1Color} />
      {/* Second bar */}
      <rect x={x + barWidth + marginLeft} y={y} width={barWidth} height={height} ry={borderRadius} fill={bar2Color} />
    </g>
  )
}
export default CustomRechartBar
