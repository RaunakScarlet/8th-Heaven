import { IMAGE_CDN } from "../utils/constants";

const RestrauntCard = ({ restrauntInfo }) => {
   console.log(restrauntInfo);
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating,veg } =
        restrauntInfo.info;
    const { deliveryTime } = restrauntInfo.info.sla;
    return (
        <div className="transition-transform transform hover:scale-105 shadow-black-100 shadow-lg">
            <img
                className="object-cover w-full h-60"
                src={IMAGE_CDN + cloudinaryImageId}
                alt={name}
            />
            <div className="p-3 space-y-4">
                <h6 className="font-bold text-lg bg-clip-content truncate break-words ">
                    {name}
                </h6>
                <h6 className="cuisines flex-wrap bg-clip-content truncate ">
                    {cuisines.join(", ")}
                </h6>
                <span className="flex flex-wrap">
                    <div className=" justify-center m-1 py-2">
                        {avgRating <4 ? (
                            <h4 className="heading pt-0 p-2 text-base w-12 h-6 bg-yellow-300 text-white font-medium rounded-md">
                                {avgRating}⭐
                            </h4>
                        ) : (
                            <h4 className="heading pt-0 p-2 text-base w-12 h-6 bg-green-600 text-white font-medium rounded-md">
                                {avgRating}⭐
                            </h4>
                        )}
                    </div>

                    <h2 className=" flex items-center text-lg  text-black font-bold m-1.5">
                        <span className="px">📍</span>
                        {deliveryTime} Kms
                    </h2>
                    <h2 className=" flex items-center text-lg  text-black font-bold m-1.5">
                        {costForTwo}
                    </h2>

                    
                </span>
            </div>
        </div>
    );
};

export const isPromotedRestraunt = (RestrauntCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-black text-sm font-medium text-white select-none">
			Promoted
                </label>
                <RestrauntCard {...props} />
            </>
        );
    };
};

export default RestrauntCard;
