import React from "react"
import SectionHeader from "../sectionHeader/SectionHeader"

interface SimpleSectionHeaderProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  subtitleClassName?: string
  rating?: { value: number; total: number }
  rightContent?: React.ReactNode
}

const SimpleSectionHeader: React.FC<SimpleSectionHeaderProps> = (props) => {
  return <SectionHeader titleClassName="text-sm text-black" {...props} />
}

export default SimpleSectionHeader
