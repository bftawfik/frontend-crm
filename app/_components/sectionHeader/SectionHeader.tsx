import React from "react"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  titleClassName?: string
  subtitleClassName?: string
  rating?: { value: number; total: number }
  rightContent?: React.ReactNode
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  titleClassName = "text-xs font-semibold text-[#B5B5C3] capitalize",
  subtitleClassName = "text-sm font-semibold",
  rating,
  rightContent,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-3">
        {icon && <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBFBFC]">{icon}</div>}
        <div className="flex flex-col">
          <div className={titleClassName}>{title}</div>
          {subtitle && <div className={subtitleClassName}>{subtitle}</div>}
        </div>
      </div>
      {rating && (
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold">{rating.value}</div>
          <div className="text-[10px] font-light">Out of {rating.total}</div>
        </div>
      )}
      {rightContent && rightContent}
    </div>
  )
}

export default SectionHeader
