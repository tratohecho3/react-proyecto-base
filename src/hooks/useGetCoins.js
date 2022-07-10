import { useState, useEffect } from 'react';
import URL_API_MAPPING from "../constants/urls";


const useGetCoins = () => {

    const [ coins, setCoins ]   = useState([]);
    const toSearch              = 'vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    const fetchCoins = async () => {

        const response = await fetch( `${ URL_API_MAPPING }/?${ toSearch }` );
        const coinData = await response.json();

        setCoins( coinData );

    };

    useEffect(() => {
        fetchCoins();
    }, []);

    return coins;

}

export default useGetCoins;