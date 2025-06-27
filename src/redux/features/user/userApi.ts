import { baseApi } from "@/redux/api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get User Profile
    getUserProfile: builder.query({
      query: () => '/authentication_app/user_profile/',
      providesTags: ['Profile'],
    }),

    // Update User Profile
    updateUserProfile: builder.mutation({
      query: (profileData) => ({
        url: '/authentication_app/user_profile/',
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: profileData,
      }),
      invalidatesTags: ['Profile'],
    }),

    // Get User Log
    getUserLog: builder.query({
      query: () => '/authentication_app/settings/user_log/',
      providesTags: ['UserLog'],
    }),
  })
});
export const { useGetUserProfileQuery, useUpdateUserProfileMutation, useGetUserLogQuery } = userApi;