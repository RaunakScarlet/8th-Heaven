import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/hooks/useRestrauntMenu";
import RestrauntCategory from './RestrauntCategory'
import { useState } from "react";


const RestrauntMenu = () => {

    const restrauntId = useParams();
    
    const restrauntInfo = useRestrauntMenu(restrauntId.id);

    const [showIndexItem, setShowIndexItem] = useState(0);
    
    if (restrauntInfo == null) return <Shimmer />
    
    const {
        name,
        cuisines,
        costForTwoMessage
    } = restrauntInfo?.cards[0]?.card?.card?.info;

     {
         /* data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info */
     }

    // const { itemCards } =
    //     restrauntInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    // console.log(itemCards);

     const categories =
         restrauntInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
             (category) =>
                 category?.card?.card?.["@type"] ==
                 "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
         );
     
            return (
                <div className="text-center">
                    <h1 className="font-bold my-6 text-2xl">{name}</h1>
                    <p className="font-bold text-lg">
                        {cuisines.join(", ")}-{costForTwoMessage}
                    </p>
                    {
                        /* categories List */
                        // console.log(categories)
                    }

                    {categories.map((category, index) => (
                        <RestrauntCategory
                            key={category?.card?.card?.data?.title}
                            data={category?.card?.card}
                            show={index == showIndexItem ? true : false}
                            setShowIndexItem={() => setShowIndexItem(index)}
                            
                        />
                    ))}
                </div>
            );
}
export default RestrauntMenu;