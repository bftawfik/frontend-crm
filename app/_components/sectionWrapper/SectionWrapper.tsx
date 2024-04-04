import React from "react"
interface SectionWrapperProps {
  className?: string
  children: React.ReactNode
}
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "shadow-main flex w-full gap-3 rounded-xl border-0 bg-white p-6 flex-col",
}) => {
  return <section className={className}>{children}</section>
}

export default SectionWrapper
