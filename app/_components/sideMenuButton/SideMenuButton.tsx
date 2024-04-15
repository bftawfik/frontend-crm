import clsx from "clsx"

interface SideMenuButtonProps {
  icon: React.ElementType
  label: string
  clickHandler: () => void
  isActive: boolean
}
const SideMenuButton = ({ icon: Icon, label, clickHandler, isActive }: SideMenuButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className={clsx("my-2 flex w-full items-center gap-3 rounded-[8px] p-3", {
        "bg-gray-md transition-colors duration-100": isActive,
      })}
    >
      <Icon />
      <span className="text-sm font-medium capitalize text-[#464E5F]">{label}</span>
    </button>
  )
}

export default SideMenuButton
