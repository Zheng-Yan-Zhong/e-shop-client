import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../reducer/theme'
import cartReducer from '../reducer/cart'
import authReducer  from '../reducer/auth'
export default configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
        auth: authReducer
    }
})