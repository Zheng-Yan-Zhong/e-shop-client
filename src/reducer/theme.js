import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: { color: "grey", bgc: 'white'}
    },
    reducers: {
        darkMode: (state) => {
            state.value = { color: 'white', bgc: 'black'}
        },
        lightMode: (state) => {
            state.value = { color: 'grey', bgc: 'white'}
        }
    }
})

export const { darkMode, lightMode } = themeSlice.actions
export default themeSlice.reducer