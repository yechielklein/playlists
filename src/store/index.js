import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

export const reset = createAction('app/reset');

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
	},
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return [];
		});
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
	},
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return [];
		});
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