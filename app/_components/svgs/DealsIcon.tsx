export const DealsIcon: React.FC<SvgProps> = ({ className, width = 17, height = 17, fill = "#B5B5C3" }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
    >
      <rect opacity="0.3" x="0.166016" y="0.167969" width="8.33333" height="16.6667" fill={fill} />
      <path
        d="M14.7487 14.7526L14.7487 11.6276C14.7487 11.6276 14.9274 10.5859 15.7904 10.5859C16.6533 10.5859 16.832 11.6276 16.832 11.6276V16.8359L11.6237 16.8359C11.6237 16.8359 10.582 16.8359 10.582 15.7943C10.582 14.7526 11.6237 14.7526 11.6237 14.7526L14.7487 14.7526Z"
        fill="#DADADA"
      />
      <path
        d="M14.7487 2.2513L11.6237 2.2513C11.6237 2.2513 10.582 2.07258 10.582 1.20964C10.582 0.346691 11.6237 0.167969 11.6237 0.167969L16.832 0.167969L16.832 5.3763C16.832 5.3763 16.832 6.41797 15.7904 6.41797C14.7487 6.41797 14.7487 5.3763 14.7487 5.3763L14.7487 2.2513Z"
        fill="#DADADA"
      />
    </svg>
  )
}
