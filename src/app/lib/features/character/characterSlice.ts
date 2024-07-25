import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import CharacterData = App.Data.CharacterData;

export interface CharacterState {
  loading: boolean;
  characters: CharacterData[];
  activeCharacter: CharacterData | null;
  searchQuery: string;
}

const initialState: CharacterState = {
  loading: false,
  characters: [],
  activeCharacter: null,
  searchQuery: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<CharacterData[]>) => {
      state.characters = action.payload;
    },
    setActiveCharacter: (state, action: PayloadAction<CharacterData>) => {
      state.loading = false;
      state.activeCharacter = action.payload;
      state.characters = [];
      state.searchQuery = action.payload.name;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.searchQuery = action.payload;
    },
    resetSearchQuery: (state) => {
      state.characters = [];
      state.loading = false;
      state.searchQuery = "";
    },
  },
});

export const {
  setActiveCharacter,
  setSearchQuery,
  setCharacters,
  resetSearchQuery,
} = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
