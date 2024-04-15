"use client"

import clsx from "clsx"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "components/ui/dropdown-menu"
import ChevronDownIcon from "../svgs/ChevronDownIcon"

interface Item {
  id: number
  title?: string
}

interface DropdownListProps {
  className?: string
  itemClassName?: string
  list: Item[]
  title: string
  selectedValue?: number
  onSelect: (id: number) => void
  enabled?: boolean
}

export function DropdownList({
  list,
  className,
  itemClassName = "w-full",
  title,
  selectedValue,
  onSelect,
  enabled = true,
}: DropdownListProps) {
  const selectedItem = selectedValue === undefined ? selectedValue : list.find((item) => item.id === selectedValue)
  const selectedTitle = selectedItem ? selectedItem.title : title
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={clsx(className, { "pointer-events-none w-full shrink-0 items-center gap-1 opacity-60": !enabled })}
      >
        {selectedTitle}
        <ChevronDownIcon className="w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {list.map(({ id, title }) => (
          <DropdownMenuItem key={id}>
            <button className={itemClassName} onClick={() => onSelect(id)}>
              {title ? <span>{title}</span> : null}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
