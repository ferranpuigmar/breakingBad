import { ErrorResponse } from 'modules/shared/utils/getError';
import getCharactersService, { CharactersResponse } from 'services/getCharactersService';
import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

type CharactersState = {
  list: CharactersResponse;
  loading: boolean;
  error: undefined | string | SerializedError;
};

const initialState: CharactersState = {
  list: [],
  loading: true,
  error: undefined
};

export const getCharacters = createAsyncThunk<
  CharactersResponse | ErrorResponse,
  { limit?: number },
  {
    rejectValue: ErrorResponse;
  }
>('GET_CHARACTERS_FROM_API', async ({ limit }, thunkApi) => {
  try {
    return await getCharactersService({ limit });
  } catch (err) {
    return thunkApi.rejectWithValue((await err) as ErrorResponse);
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
        state.list = action.payload as CharactersResponse;
      }),
      builder.addCase(getCharacters.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error;
        }
      });
  }
});

const { actions } = charactersSlice;
export const { uploadCharacters } = actions;
export default charactersSlice.reducer;
