import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
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
        console.log(restrauntList);
    }, []);

    const fetchData = async () => {
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
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) return <h1>Looks like You are Offline</h1>
    
        return restrauntList.length == 0 ? (
             <Shimmer />
         ) : (
             <div className="body">
                 <div className="searchContainer">
                     <input
                         type="text"
                         value={searchItem}
                         placeholder="search"
                         onChange={(e) => setSearchItem(e.target.value)}
                     />
                     <button
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
                 <div className="restrauntContainer">
                     {filteredRestrauntList.length == 0 ? (
                         <NotFound />
                     ) : (
                         filteredRestrauntList.map((restraunt) => (
                             <Link to={"restraunts/" + restraunt.info.id}>
                                 <RestrauntCard
                                     key={restraunt.info.id}
                                     restrauntInfo={restraunt}
                                 />
                             </Link>
                         ))
                     )}
                 </div>
             </div>
         );
};

export default Body;
