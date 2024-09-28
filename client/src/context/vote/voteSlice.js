// src/redux/voteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCandidate: null,
  voteCasted: false,
};

const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    selectCandidate(state, action) {
      state.selectedCandidate = action.payload;
    },
    castVote(state) {
      if (state.selectedCandidate) {
        state.voteCasted = true;
      }
    },
    resetVote(state) {
      state.selectedCandidate = null;
      state.voteCasted = false;
    },
  },
});

// Export the actions
export const { selectCandidate, castVote, resetVote } = voteSlice.actions;

// Export the reducer
export default voteSlice.reducer;
