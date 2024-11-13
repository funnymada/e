import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (credentials) => {
    return new Promise((resolve, reject) => {
            if (credentials.username === 'user' && credentials.password === 'user') {
                resolve({ username: credentials.username });
            } else {
                reject(new Error('Credenziali errate'));
            }
    });
});

const authslice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
        loading: false,
    },
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectLoading = (state) => state.auth.loading;
export const {logout} = authslice.actions ;
export default authslice.reducer;
