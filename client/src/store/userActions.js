import { createSlice } from "@reduxjs/toolkit";

const usersList = createSlice({
    name: 'todos',
    initialState: {
        user: {
            token: '',
        },
        status: 0
    },
    reducers: {
        signUpAction(state, action) {
            state.user.token = action.payload.token
        },
        signOutAction(state) {
            state.user.token = ''
        }
    }
})

export const { signUpAction, signOutAction } = usersList.actions;

export default usersList.reducer;