import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload);
		},
		removeMovie(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		}
	}
});

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		}
	}
});

const store = configureStore({
	reducer: {
		movies: moviesSlice.reducer,
		songs: songsSlice.reducer
	}
});

export { store };
export const { addMovie, removeMovie } = moviesSlice.actions;
export const { addSong, removeSong } = songsSlice.actions;