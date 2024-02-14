import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface singleUser {
  id: number;
  mobile: string;
  email: string;
  address: string;
  createdDate: string;
  updatedDate: string;
}

export interface postType {
  email: string;
  mobileNo: string;
  address: string;
}

interface status {
  apiStatus: "INITIAL" | "LOADING" | "SUCCESS" | "FAILURE";
}

export interface Istate {
  users: singleUser[];
  usersApiStatus: status["apiStatus"];
  singleUserApiStatus: status["apiStatus"];
  singleUser: singleUser;
}

const initialState: Istate = {
  users: [],
  usersApiStatus: "INITIAL",
  singleUserApiStatus: "INITIAL",
  singleUser: {} as singleUser,
};

export const getUsers = createAsyncThunk("get-users", async () => {
  // try {
  //   const apiUrl = "http://43.205.130.115:8081/user";
  //   const response = await fetch(apiUrl);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch users");
  //   }
  //   const data = await response.json();
  //   return data;
  // }
  // catch(error) {
  //   console.log(error)
  // }
  return fetch("http://43.205.130.115:8081/user")
    .then((res) => res.json())
    .then((jsonData) => jsonData)
    .catch((error) => console.log(error));
});

export const getSingleUser = createAsyncThunk(
  "get-single-user",
  (id: number) => {
    const apiUrl = `http://43.205.130.115:8081/user/${id}`;
    return fetch(apiUrl)
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
);

export const deleteUser = createAsyncThunk("delete-user", (id: number) => {
  const apiurl = `http://43.205.130.115:8081/user/${id}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id),
  };
  return fetch(apiurl, options)
    .then((res) => res.json())
    .catch((error) => console.log(error));
});

export const addUser = createAsyncThunk("add-user", async (data: postType) => {
  const apiUrl = "http://43.205.130.115:8081/user";
  const options = {
    method: "POST",
    body: JSON.stringify({ ...data, createdDate: "", updatedDate: "" }),
    header: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(apiUrl, options);
  return await res.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      console.log("Loading");
      state.usersApiStatus = "LOADING";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log("success");
      state.usersApiStatus = "SUCCESS";
      console.log("users", "fulfilled");
      console.log(action.payload);

      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log("failure");
      state.usersApiStatus = "FAILURE";
      console.log(action.error.message);
    });
    builder.addCase(getSingleUser.pending, (state) => {
      state.singleUserApiStatus = "LOADING";
    });
    builder.addCase(getSingleUser.fulfilled, (state, action) => {
      state.singleUserApiStatus = "SUCCESS";
      state.singleUser = action.payload;
    });
    builder.addCase(getSingleUser.rejected, (state) => {
      state.singleUserApiStatus = "FAILURE";
    });
    builder.addCase(addUser.pending, () => {
      console.log("pending");
    });
    builder.addCase(addUser.fulfilled, () => {
      console.log("success");
    });
    builder.addCase(addUser.rejected, () => {
      console.log("failure");
    });
  },
});

export default usersSlice.reducer;
