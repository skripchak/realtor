import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialToken = localStorage.getItem("token");

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      console.log(initialToken);
      if (initialToken) {
        // include token in req header
        headers.set('Authorization', `Bearer ${initialToken}`)
        return headers
      }
    },
  }),

  endpoints: (builder) => ({
    getProperyList: builder.query({
      query: () => `/api/premisses`,
    }),
    getProperyDetails: builder.query({
      query: (id) => `/api/premisses/${id}`,
    }),
    getAgencyList: builder.query({
      query: () => `/api/realtors`,
    }),
    addRieltor: builder.mutation({
      query: (credentials) => ({
        url: "/api/realtors",
        method: "POST",
        body: credentials,
      }),
    }),
    addPost: builder.mutation({
      query: (credentials) => ({
        url: "/api/premisses",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetProperyListQuery,
  useGetProperyDetailsQuery,
  useGetAgencyListQuery,
  useAddRieltorMutation,
  useAddPostMutation,
} = bayutApi;
