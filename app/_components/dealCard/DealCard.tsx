import React from "react"
import { numberFormatter } from "app/_helpers/numberFormatter"
import { Separator } from "components/ui/separator"
import StatusTag from "../statusTag/StatusTag"

interface DealCardPros {
  name: string
  transactionDate: string
  status: string
  amount: number
}
const DealCard = ({ name, transactionDate, status, amount }: DealCardPros) => {
  return (
    <div className=" flex flex-col gap-4 rounded-[8px] border p-4">
      <div className="flex items-start justify-between">
        <div>
          <p>{name}</p>
          <p className="text-[10px] font-normal text-[#A1A5B7]">Transaction Date {transactionDate}</p>
        </div>
        <StatusTag label={status}></StatusTag>
      </div>
      <Separator className=" h-[0.5px] w-full bg-[#EDEFF2]" />
      <div className="text-sm font-bold">{numberFormatter(amount)} EGP</div>
    </div>
  )
}

export default DealCard
