import React from "react"

export const XIcon: React.FC<SvgProps> = ({ width = 32, height = 32, className = "h-5 w-5" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="m17.705 7.705l-1.41-1.41L12 10.59L7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295l1.41 1.41L12 13.41l4.295 4.295l1.41-1.41L13.41 12l4.295-4.295z"
      ></path>
    </svg>
  )
}
