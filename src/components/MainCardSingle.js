import React from "react";

const MainCardSingle = (props) => {
  return (
    <>
      {/* <div>{props?.item?.capsule_serial}</div> */}
      <div className="w-[296px] h-[376px] mx-3 my-3 border border-gray-200 hover:border-gray-300 hover:shadow-md ">
        <div className="flex justify-center pt-4">
          <img
            className="w-[250px] h-[200px]   "
            src={"https://www.jacksonville.com/gcdn/-mm-/87511c0773fbf5b77a86a34c223e14515844b9e1/c=0-176-5500-3270/local/-/media/2020/07/18/JacksonvilleFL/ghows-LK-200528960-9ddb9d5b.jpg"}
          />
        </div>
        {/* <div>{props?.item?.capsule_serial}</div> */}

        
        <div className=" px-5 ">
          <h1 className=" pt-2 text-base font-semibold ">{`Serial No : ${props?.item?.capsule_serial}`}</h1>
          <h1 className=" pt-2 text-base font-semibold ">{`Name : ${props?.item?.capsule_id}`}</h1>
          

        <div className="flex pt-4 justify-between">
          <h1 className="text-xs font-medium">Rating⭐⭐⭐</h1>
          {/* <h1 className="text-xs font-medium">&#9672;</h1>
          <h1 className="text-xs font-medium">{}mins</h1>
          <h1 className="text-xs font-medium" >&#9672;</h1>
          <h1 className="text-xs font-medium">{}</h1> */}
        </div>
        
        <div className="flex pt-4" >
            {/* <p className="text-sm font-medium pr-3 text-red-800">{}</p>
            <p className=" text-sm font-medium  text-red-800">{}</p> */}
        </div>
        
          
        </div>
      </div>
    </>
  );
};

export default MainCardSingle;

{
  /* <div className="w-[296px] h-[376px] mx-3 my-3 border border-gray-200 hover:border-gray-300 hover:shadow-md ">
<div className="flex justify-center pt-4">
  <img
    className="w-[250px] h-[200px]   "
    src={IMG_LINK + props?.cards?.info?.cloudinaryImageId}
  />
</div>

<div className=" px-5 ">
  <h1 className=" pt-2 text-base font-semibold ">{ props?.cards?.info?.name}</h1>
  <h1 className=" text-xs font-medium pt-1">{props?.cards?.info?.cuisines.join(',')}</h1>

<div className="flex pt-4 justify-between">
  <h1 className="text-xs font-medium">⭐{props?.cards?.info?.avgRating}</h1>
  <h1 className="text-xs font-medium">&#9672;</h1>
  <h1 className="text-xs font-medium">{props?.cards?.info?.sla?.deliveryTime}mins</h1>
  <h1 className="text-xs font-medium" >&#9672;</h1>
  <h1 className="text-xs font-medium">{props?.cards?.info?.costForTwo}</h1>
</div>

<div className="flex pt-4" >
    <p className="text-sm font-medium pr-3 text-red-800">🏷{props?.cards?.info?.aggregatedDiscountInfoV3?.header}</p>
    <p className=" text-sm font-medium  text-red-800">{props?.cards?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
</div>

  
</div>
</div> */
}
