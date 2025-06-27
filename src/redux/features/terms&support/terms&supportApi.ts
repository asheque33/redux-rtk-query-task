import { baseApi } from "@/redux/api/baseApi"

export const terms_supportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Terms
    getTerms: builder.query({
      query: () => '/terms_and_support/terms/',
      providesTags: ['Terms'],
    }),

    // Send Support Request
    sendSupportRequest: builder.mutation({
      query: (data) => ({
        url: '/terms_and_support/support/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
  }),
});
export const { useGetTermsQuery, useSendSupportRequestMutation } = terms_supportApi;