import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Session } from 'next-auth';

interface SessionState {
  user: Session['user'] | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: SessionState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

export const fetchSession = createAsyncThunk(
  'session/fetchSession',
  async () => {
    const response = await fetch('/api/auth/session');
    if (!response.ok) {
      throw new Error('Failed to fetch session');
    }
    return response.json();
  }
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken as string;
      state.loading = false;
      state.error = null;
    },
    clearSession: (state) => {
      state.user = null;
      state.accessToken = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch session';
      });
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer; 