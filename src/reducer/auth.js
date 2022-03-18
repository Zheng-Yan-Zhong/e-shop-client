import { createSlice } from "@reduxjs/toolkit";

const init = { username: null, accessToken: '', isAdmin: ''}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: init
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = init
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer