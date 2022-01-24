import getCharactersService, { CharactersResponse } from './../../services/getCharactersService';
import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

type MyKnownError = {
  errorMessage: string;
};

type CharactersState = {
  list: CharactersResponse;
  loading: boolean;
  error: null | string | SerializedError;
};

const initialState: CharactersState = {
  list: [],
  loading: true,
  error: null
};

export const getCharacters = createAsyncThunk<
  CharactersResponse,
  { limit?: number },
  {
    rejectValue: MyKnownError;
  }
>('GET_CHARACTERS_FROM_API', async ({ limit }, thunkApi) => {
  try {
    return await getCharactersService({ limit });
  } catch (err) {
    return thunkApi.rejectWithValue((await err) as MyKnownError);
  }
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    uploadCharacters: (state, actions) => {
      state.list = actions.payload;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      }),
      builder.addCase(getCharacters.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage;
        } else {
          state.error = action.error;
        }
      });
  }
});

const { actions } = charactersSlice;
export const { uploadCharacters } = actions;
export default charactersSlice.reducer;
