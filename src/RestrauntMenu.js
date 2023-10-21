import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTRAUNT_MENU_LIST } from "../utils/constants";


const RestrauntMenu = () => {

    const restrauntId = useParams();
    const [restrauntInfo, setRestrauntInfo] = useState(null);


    useEffect(() => {
        fetchRestrauntData();
    }, [])

    const fetchRestrauntData = async () => {
        const data = await fetch(RESTRAUNT_MENU_LIST + restrauntId.id);
        const json = await data.json();
        setRestrauntInfo(json.data)
    }

    if (restrauntInfo == null) return <Shimmer />
    
    const {
        name,
        cuisines,
        costForTwoMessage
    } = restrauntInfo?.cards[0]?.card?.card?.info;

     {
         /* data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info */
     }

    const { itemCards } =
        restrauntInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    console.log(itemCards);
            
            return (
                <div className="menu">
                    <h1>{name}</h1>
                    <p>
                        {cuisines.join(", ")}-{costForTwoMessage}
                    </p>
                    <h2>Menu</h2>

                    <ul>
                        {itemCards.map((item) => (
                            <li key={item.card.info.id}>
                                {item.card.info.name} - Price Rs.
                                { item.card.info.price / 100}
                            </li>
                        ))}
                    </ul>
                </div>
            );
}
export default RestrauntMenu;