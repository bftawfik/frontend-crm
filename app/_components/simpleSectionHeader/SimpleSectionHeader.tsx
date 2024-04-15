import React from "react"
import SectionHeader from "../sectionHeader/SectionHeader"

interface SimpleSectionHeaderProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  titleClassName?: string
  rating?: { value: number; total: number }
  rightContent?: React.ReactNode
}

const SimpleSectionHeader: React.FC<SimpleSectionHeaderProps> = (props) => {
  return <SectionHeader subtitleClassName="text-lg font-bold" {...props} />
}

export default SimpleSectionHeader
