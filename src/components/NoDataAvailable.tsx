import Image from "next/legacy/image";
import React from "react";

export const NoDataAvailable = () => {
  return (  
    <div className="col-span-2 bg-ks-white h-[550px] rounded">
      <div className="flex flex-col items-center justify-center gap-5 w-full h-full text-ks-dark text-center p-10">
        <Image className="h-[265px] w-[265px]" src="/images/no-data-available.jpg" alt="No data available" height={200} width={200} />
        <h4 className="text-2xl font-bold">No Data Available</h4>
        <span className="text-xl text-gray-600">
          There is not data to show you right now.
        </span>
      </div>
    </div>
  );
};
