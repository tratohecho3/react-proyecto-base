import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


const useStyles = makeStyles({
 
  table: {
    backgroundColor: "rgba( 0, 0, 28, 0.6)",
    padding: 6,
    width: '100%',
  },

  images: {
    width: 50,
    height: 50,
  },

  color:{
    color: "white",
  }, 

});


const columns = [

  { id: 'image', label: 'Logo' },
  { id: 'name', label: 'Moneda' },
  { id: 'symbol', label: 'Symbol' },
  { id: 'current_price', label: 'Precio' },
  { id: 'market_cap', label: 'Capacidad del Mercado' },
  { id: 'price_change_percentage_24h', label: 'Últimas 24 horas' },
  { id: 'total_volume', label: 'Total de Mercado' },

];


const CoinsTable = ({ coins }) => {
  
  const classes = useStyles();

  return (

    <TableContainer className={ classes.table }>
      <Table aria-label="simple table"  >
        <TableHead>
          <TableRow>

            { columns.map(( column ) => (

              <TableCell
                key={ column.id }
                align='center'
                variant='head'
                className={ classes.color }
              >
                { column.label }
              </TableCell>

            ))}
            
          </TableRow>
        </TableHead>
        <TableBody >
            
            { coins.map(( coin ) => {
                return (

                    <TableRow key={ coin.id }>
                      
                      <TableCell
                        className={ classes.color } 
                        align="center"
                      >
                          <img className={ classes.images } src={ coin.image }  />
                      </TableCell>
                      
                      <TableCell  
                        className={ classes.color } 
                        align="center"
                      >
                          { coin.name }
                      </TableCell>
                      
                      <TableCell  
                        className={ classes.color } 
                        align="center"
                      >
                          { coin.symbol }
                      </TableCell>
                      
                      <TableCell  
                        className={ classes.color } 
                        align="center"
                      >
                          ${ coin.current_price }
                      </TableCell>
                      
                      <TableCell  
                        className={ classes.color } 
                        align="center"
                      >
                          ${ coin.market_cap }
                      </TableCell>
                      
                      <TableCell 
                        align="center"
                        style={{
                          color: coin.price_change_percentage_24h > 0 ? 'lightgreen' : 'red'
                        }}
                      >
                          { coin.price_change_percentage_24h }%
                      </TableCell>
                      
                      <TableCell  
                        className={ classes.color } 
                        align="center"
                      >
                          ${ coin.total_volume }
                      </TableCell>
                    
                    </TableRow> 

                )
            })}

        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CoinsTable;