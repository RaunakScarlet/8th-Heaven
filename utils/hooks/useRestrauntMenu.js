import { useEffect, useState } from "react";
import { RESTRAUNT_MENU_LIST } from "../constants";

const useRestrauntMenu = (id) => {
    const [restrauntInfo, setRestrauntInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTRAUNT_MENU_LIST + id);
        const json = await data.json();
        setRestrauntInfo(json.data);
    };

    return restrauntInfo;
};

export default useRestrauntMenu;