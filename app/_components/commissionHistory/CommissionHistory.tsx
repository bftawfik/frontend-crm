import React from 'react';

interface CommissionItem {
  id: number;
  DeveloperName: string;
  Price: string;
  code: string;
  rate:number;
}

interface CommissionHistoryProps {
  maxRate?: number;
}

const CommissionHistory: React.FC<CommissionHistoryProps> = ({ maxRate = 10}) => {
  const data: CommissionItem[] = [
    { id: 1, DeveloperName: "Hassan Allam Developer", Price: "30,000", code: "TCR #342131", rate: 9 },
  ];

  return (
    <div className="flex justify-between py-6 ">
      {data.map((item: CommissionItem) => (
        <>
        <div key={item.id} className="flex gap-4">
          <div className="text-[#A1A5B7] leading-6 font-normal text-sm">{`${item.rate}/${maxRate}`}</div>
          <div className="flex flex-col">
            <div className="flex text-base font-semibold leading-7">
              <p className="text-[#4CB087]">+</p>
              <p className="font-bold">{item.Price} EGP</p>
            </div>
            <p className="font-normal text-sm text-[#A1A5B7] leading-6">{item.DeveloperName}</p>
          </div>
        </div>
        <div className="text-xs font-normal leading-5">{item.code}</div>
        </>
      ))}
    </div>
  );
};

export default CommissionHistory;
