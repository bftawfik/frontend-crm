const NotificationDot: React.FC<SvgProps> = ({ className, width = 7, height = 7, fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 7 7"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.5" cy="3.5" r="3.5" fill="#EB5150" />
    </svg>
  )
}

export default NotificationDot
