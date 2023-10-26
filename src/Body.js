import { useEffect, useState } from "react";
import RestrauntCard,{isPromotedRestraunt} from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTRAUNT_LIST } from "../utils/constants";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";



const Body = () => {
    const [restrauntList, setRestrauntList] = useState([]);
    const [filteredRestrauntList, setFilteredRestrauntList] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    

    useEffect(() => {
        fetchData();
        
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(SWIGGY_RESTRAUNT_LIST);
            const json = await data.json();

            setRestrauntList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
            );

            setFilteredRestrauntList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
            );
        } catch (error) {
            console.log(error);
        }
    };

const PromotedRestraunt = isPromotedRestraunt(RestrauntCard);

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) return <h1>Looks like You are Offline</h1>
    
    if( restrauntList.length === 0 ) return <Shimmer /> 
            
        return (
            <div className="body">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        value={searchItem}
                        placeholder="search"
                        onChange={(e) => setSearchItem(e.target.value)}
                        className="border border-black border-solid rounded-lg px-4 py-1"
                    />
                    <button
                        className="m-4 bg-red-400 px-4 py-1.5 text-white rounded-lg"
                        onClick={() => {
                            setFilteredRestrauntList(
                                restrauntList.filter((restraunt) =>
                                    restraunt.info.name
                                        .toUpperCase()
                                        .includes(searchItem.toUpperCase())
                                )
                            );
                        }}
                    >
                        Search
                    </button>
                </div>
                 <div className="px-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredRestrauntList.length == 0 ? (
                        <NotFound />
                    ) : (
                        filteredRestrauntList.map((restraunt) => (
                            <Link
                                key={restraunt.info.id}
                                to={"restraunts/" + restraunt.info.id}
                            >
                                {
                                   
                                    restraunt.info.avgRating >= 4.2 ? (
                                    <PromotedRestraunt
                                        restrauntInfo={restraunt}
                                    />
                                ) : (
                                        
                                    <RestrauntCard
                                            restrauntInfo={restraunt}
                                            
                                    />
                                )}
                            </Link>
                        ))
                        )}
                        </div>
                </div>
            </div>
        );
};

export default Body;
