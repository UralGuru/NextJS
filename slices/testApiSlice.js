// import {createAsyncThunk} from "@reduxjs/toolkit";
// import handler from "../pages/api/test";
//
//
// export const getTest = createAsyncThunk(
//     "test/gettest",
//     async (_, thunkAPI) => {
//         try {
//             const response = await handler()
//             return response.data;
//         } catch (error) {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//             thunkAPI.dispatch(setMessage(message));
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );