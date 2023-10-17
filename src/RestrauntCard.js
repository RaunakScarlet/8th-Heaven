import { IMAGE_CDN } from "../utils/constants";

const RestrauntCard = ({ restrauntInfo }) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
        restrauntInfo.info;
    const { deliveryTime } = restrauntInfo.info.sla;
    return (
        <div className="restrauntCard">
            <img
                className="res_logo"
                src={IMAGE_CDN + cloudinaryImageId}
                alt={name}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rs. {(costForTwo.match(/\d+/g) || []).map(Number)} for Two</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    );
};

export default RestrauntCard;
