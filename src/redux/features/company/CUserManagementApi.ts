import { baseApi } from "@/redux/api/baseApi";

export const companyUserManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add User
    addUser: builder.mutation({
      query: (email) => ({
        url: '/company_user_management/add_user/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { email },
      }),
      invalidatesTags: ['UserList'],
    }),

    // Get All Invited Users
    getAllInvitedUsers: builder.query({
      query: () => '/company_user_management/user_list/',
      providesTags: ['UserList'],
    }),
  })
});
export const { useAddUserMutation, useGetAllInvitedUsersQuery } = companyUserManagementApi;