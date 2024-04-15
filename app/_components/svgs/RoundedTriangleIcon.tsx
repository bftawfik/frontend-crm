const RoundedTriangleIcon: React.FC<SvgProps> = ({ className, width = 8, height = 7, fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 7"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default RoundedTriangleIcon
