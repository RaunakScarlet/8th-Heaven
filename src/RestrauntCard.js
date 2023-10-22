import { IMAGE_CDN } from "../utils/constants";

const RestrauntCard = ({ restrauntInfo }) => {
    const {
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRating
      } =restrauntInfo.info;
    const { deliveryTime } = restrauntInfo.info.sla;
    return (
        <div
            className="m-4 p-4 w-[280px] rounded-lg bg-slate-200 hover:bg-slate-400"
            
        >
            <img
                className="rounded-lg w-[250px] h-[220px]"
                src={IMAGE_CDN + cloudinaryImageId}
                alt={name}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rs. {(costForTwo.match(/\d+/g) || []).map(Number)} for Two</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    );
};



export default RestrauntCard;
