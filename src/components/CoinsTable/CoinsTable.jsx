/* import React from 'react';
const CoinsTable = () =>{
    return(
        <p>mi tabla</p>
    )
}
export default CoinsTable;

 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:"#1a1a1c",
    
  },
  percentage:{
    color:"red",
  },
  images:{
    width: 50,
    height: 50,

  },
  color:{
    color: "white",
  }, 

});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function CoinsTable({coins}) {
    console.log(coins)
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
           {/*  {tableHeaders.map((tableHeader) => {
                return(
                    <TableCell>{tableHeader}</TableCell>
                )
            })} */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))} */}

           {/* <Coins
              key         = { coin.id }
              image       = { coin.image }
              name        = { coin.name }
              symbol      = { coin.symbol }

              price       = { coin.current_price }
              priceChange = { coin.price_change_percentage_24h }
              marketcap   = { coin.market_cap }
            /> */}
            
            {coins.map((coin)=>{
                return(
                    <TableRow>
                    <TableCell  className={classes.color}><img className={classes.images} src={coin.image} alt="" /></TableCell>
                    <TableCell  className={classes.color}>{coin.name}</TableCell>
                    <TableCell  className={classes.color}>{coin.symbol}</TableCell>
                    <TableCell  className={classes.color}>${coin.current_price}</TableCell>
                    <TableCell  className={classes.color}>${coin.market_cap}</TableCell>
                    <TableCell  className={classes.color}>{coin.price_change_percentage_24h}%</TableCell>
                    <TableCell  className={classes.color}>${coin.total_volume}</TableCell>
                    </TableRow>    
                )
            })}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
