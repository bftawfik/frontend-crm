export const DashboardIcon: React.FC<SvgProps> = ({ className, width = 18, height = 18, fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.666016" y="0.75" width="2.75" height="16.5" rx="1" fill="#DADADA" />
      <rect x="9.25" y="0.75" width="2.75" height="16.5" rx="1" fill="#DADADA" />
      <rect
        opacity="0.3"
        x="9.35352"
        y="1.59766"
        width="2.75"
        height="16.5"
        rx="1"
        transform="rotate(-19 9.35352 1.59766)"
        fill="#1E1E2D"
      />
    </svg>
  )
}
