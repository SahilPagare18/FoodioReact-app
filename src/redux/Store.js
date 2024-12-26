import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '../Slices/CartSlices'
import CategorySlice from '../Slices/CategorySlice'
import slicesearch from '../Slices/SearchSlice'

const Store=configureStore({

  reducer:{
    cart:CartSlice,
    category:CategorySlice,
    search:slicesearch,
  }
});

export default Store;