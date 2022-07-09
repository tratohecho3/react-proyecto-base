import React from 'react';
import { useState } from 'react';
import useGetCoins from '../../hooks/useGetCoins';
import '../../styles/Dashboard.css';
import Coins from '../Coins/Coins';
import CoinsTable from '../CoinsTable/CoinsTable';
import {Typography, makeStyles} from '@material-ui/core';





const Dashboard = () => {

  const [ search, setSearch ] = useState( '' );

  const coins = useGetCoins();
  
  const handledChanges = event => {

    setSearch( event.target.value );

  }

  const filterCoins = coins.filter( coin => coin.name.toLowerCase().includes( search.toLowerCase() ))
  console.log(filterCoins)

  return (
    <>
      <div className='display__area'>

        <div className='search__area'>

          <div className='search__tittle'>
            {/* <h1 className='tittle'>Valor actual de Mercado, Criptomonedas</h1> */}
            <Typography variant="h3">Valor actual de Mercado, Criptomonedas</Typography>
          </div>

          <div className='seach__form'>
            <form>
              <input type="text" placeholder="Buscar Moneda" className="search__input" onChange={ handledChanges }></input>
            </form>
          </div>

        </div>

        {/* { filterCoins.map( coin => {
          return (

            <Coins
              key         = { coin.id }
              image       = { coin.image }
              name        = { coin.name }
              symbol      = { coin.symbol }

              price       = { coin.current_price }
              priceChange = { coin.price_change_percentage_24h }
              marketcap   = { coin.market_cap }
            />

          );
        })} */}

        <CoinsTable coins={filterCoins}></CoinsTable>
        
      </div>
    </>

  );
}

export default Dashboard;