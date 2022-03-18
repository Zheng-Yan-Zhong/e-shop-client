import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)            
        },
        remove: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
        },
        increase: (state, action) => {
            if(state.value[action.payload].count < 10) {
                state.value[action.payload].count++
            }
        } ,
        decrease: (state, action) => {
            if(state.value[action.payload].count > 1) {
                state.value[action.payload].count--
            }
        }
    }
})

export const { add, remove, increase, decrease } = cartSlice.actions
export default cartSlice.reducer