import SideMenuButton from "../sideMenuButton/SideMenuButton"
interface sectionItem {
  id: number
  title: string
  icon: React.ElementType
  handler: () => void
}
interface SideMenuSectionProps {
  sectionList: sectionItem[]
  sectionTitle?: string
  activeItem: string
  handleActive: (title: string) => void
}
const SideMenuSection = ({ sectionList, sectionTitle, activeItem, handleActive }: SideMenuSectionProps) => {
  const handleClick = (title: string, handler: () => void) => {
    handleActive(title)
    handler()
  }
  return (
    <div className="my-5">
      {sectionTitle && <p className="px-3 text-xs uppercase text-[#B5B5C3]">{sectionTitle}</p>}
      {sectionList.map((item, ndx) => (
        <SideMenuButton
          key={ndx}
          label={item.title}
          icon={item.icon}
          clickHandler={() => handleClick(item.title, item.handler)}
          isActive={item.title === activeItem}
        />
      ))}
    </div>
  )
}

export default SideMenuSection
