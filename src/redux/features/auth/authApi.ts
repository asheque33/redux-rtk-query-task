import { baseApi } from '../../api/baseApi';
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: 'authentication_app/signup/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: 'authentication_app/signin/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
      invalidatesTags: ['User', 'Profile'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: 'authentication_app/logout/',
        method: 'POST',

      }),
      invalidatesTags: [],
    }),
    verifyOTP: builder.mutation({
      query: ({ otp, email }) => ({
        url: 'authentication_app/verify_otp/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { otp, email },
      }),
      invalidatesTags: ['User', 'Profile'],
    }),
    resendOTP: builder.mutation({
      query: (email) => ({
        url: 'authentication_app/resend_otp/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { email },
      }),
    }),
  })
});
export const { useSignupMutation, useLoginMutation, useLogOutMutation, useVerifyOTPMutation, useResendOTPMutation } = authApi;
