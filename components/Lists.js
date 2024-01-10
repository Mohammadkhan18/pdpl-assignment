import React from 'react'

const Lists = ({ heading, links,}) => {
    return (
        <div className="text-white space-y-[7px]">
      <h4 className="font-ral text-sm md:text-lg font-semibold md:font-normal whitespace-nowrap
             ">{heading}</h4>
           <div className="font-Inter space-y-[5px] md:space-y-[14px] pl-1">
              {links.map(({ title, link }, id) => {
                 return (
                    <a
                       key={id}
                       href={link}
                       className="block text-[#FFFFFFBA] font-normal text-[11px] md:text-xs"
                    >
                       {title}
                    </a>
                 );
              })}
           </div>
        </div>
     );
}

export default Lists