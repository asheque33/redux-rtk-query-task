// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://alibackend.duckdns.org/',
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().auth.accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`)
      }
      return headers;
    }
  }),
  tagTypes: ['User', 'Profile', 'Chat', 'UserList'],
  endpoints: () => ({}),
});
