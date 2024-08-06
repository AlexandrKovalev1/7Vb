import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	rejectValue: string | null;
}>();
