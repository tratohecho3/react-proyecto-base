import React from 'react';
import { createTheme, FormControl, Grid, Input, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { useState } from 'react';
import useGetCoins from '../../hooks/useGetCoins';
import CoinsTable from '../CoinsTable/CoinsTable';


const useStyles = makeStyles (() => ({ 

  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    color : 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },

  searchContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    height: '30%',
    '@media (max-width: 900px)': {
      height: '27%',
    },
  },

  searchTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  input: {
    width: '30vw',
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 3,
    '@media (max-width: 900px)': {
    width: '45vw'
    },
    '@media (max-width: 500px)': {
    width: '60vw'
    },
  },

  tableContainer: {
    maxWidth: '81%',
    maxHeight: '100%',
    height: '70%',
    '@media (max-width: 900px)': {
      height: '73%',
    },
    alignItems: 'flex-start',
    overflow: 'auto',
  }

}));


const theme = createTheme();

  theme.typography.h1 = {

    fontSize: '1.5rem',
    fontWeight: 'bold',

    '@media ( min-width: 750px )': {
      fontSize: '1.8rem'
    },

    [ theme.breakpoints.up( 'md') ]: {
      fontSize: '2.1rem',
    },


    [ theme.breakpoints.up( 'lg') ]: {
      fontSize: '2.7rem',
    }

};


const Dashboard = () => {

  const [ search, setSearch ] = useState( '' );

  const coins = useGetCoins();

  const classes = useStyles();
  
  const handledChanges = event => {

    setSearch( event.target.value );

  }

  const filterCoins = coins.filter( coin => coin.name.toLowerCase().includes( search.toLowerCase() ));

  return (
    <>

      <Grid container spacing={ 1 } className={ classes.root }>

        <Grid container item xs={ 12 } xm={ 8 } className={ classes.searchContainer }>

          <Grid container item className={ classes.searchTitle }>
            <ThemeProvider theme={ theme }>
              <Typography variant="h1">Valor actual de Mercado, Criptomonedas</Typography>
            </ThemeProvider>
          </Grid>
          
          <FormControl>
            <Input 
              className={ classes.input }
              placeholder='Buscar Crypto Moneda'
              disableUnderline
              onChange={ handledChanges }
            />
          </FormControl>

        </Grid>

        <Grid container item xs={ 12 } xm={ 8 } className={ classes.tableContainer }>
          <CoinsTable 
            coins={ filterCoins } 
            key={ coins.id }
          />
        </Grid>
      
      </Grid>
        
    </>
  );
}

export default Dashboard;