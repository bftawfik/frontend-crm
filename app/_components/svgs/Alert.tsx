const Alert: React.FC<SvgProps> = ({ className, width = 18, height = 18, fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 4.82812V7.32563" stroke="#DADBDF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path
        opacity="0.4"
        d="M11.4975 14.1133C11.4975 15.4858 10.3725 16.6108 9 16.6108C8.3175 16.6108 7.6875 16.3258 7.2375 15.8758C6.7875 15.4258 6.5025 14.7958 6.5025 14.1133"
        stroke="#AEAEB5"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M9.01498 1.5C6.25498 1.5 4.01998 3.735 4.01998 6.495V8.07C4.01998 8.58 3.80998 9.345 3.54748 9.78L2.59498 11.37C2.00998 12.3525 2.41498 13.4475 3.49498 13.8075C7.07998 15 10.9575 15 14.5425 13.8075C15.555 13.47 15.99 12.285 15.4425 11.37L14.49 9.78C14.2275 9.345 14.0175 8.5725 14.0175 8.07V6.495C14.01 3.75 11.76 1.5 9.01498 1.5Z"
        stroke="#B5B5C3"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Alert
