import React from 'react';
import '../../styles/Coins.css';
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
    width: 650,
    backgroundColor:"green",

  },
  img: {

    height: 30,
    width: 30,
    marginRight: 12,
    marginLeft: 12,
  
  },
});



const Coins = ({ name, image, symbol, price, priceChange, marketcap }) => {

  let coinName = name.toLowerCase();
    const classes = useStyles();
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell align="right">Moneda</TableCell>
              <TableCell align="right">Simbolo</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Porcentaje</TableCell>
              <TableCell align="right">Capacidad Mercado</TableCell>
            </TableRow>
          </TableHead>  
          <TableBody>
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                <img src={ image } alt="crypto"/>
                </TableCell>
                <TableCell align="right">{coinName}</TableCell>
                <TableCell align="right">{symbol}</TableCell>
                <TableCell align="right">{price}</TableCell>
                <TableCell align="right">{priceChange}</TableCell>
                <TableCell align="right">{marketcap}</TableCell>
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  /* return (

    <div className="coins__table">
        
        <div className="coin__row">

          <div className="coin">
            <img src={ image } alt="crypto"/>
            <h1>{ coinName }</h1>
            <p className="coin__symbol">{ symbol }</p>
          </div>

          <div className="coin__data">
              <p className="coin__price">${ price }</p>
              { priceChange < 0 ? (
                <p className="coin__percent red">{ priceChange.toFixed( 2 ) }%</p>
              ) : (<p className="coin__percent green">{ priceChange.toFixed( 2 ) }%</p>)
            } 
            <p className="coin__marketcap">
              Cap Mercado: ${ marketcap.toLocaleString() }
            </p>
          </div>

        </div>
    
    </div>
  
  )}; */

export default Coins;