import { baseApi } from "@/redux/api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Buy Subscription
    buySubscription: builder.mutation({
      query: (subscriptionPlan) => ({
        url: '/subscription/buy_subscription/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { subscription_plan: subscriptionPlan },
      }),
      invalidatesTags: ['Subscription', 'Profile'],
    }),

    // Update Subscription
    updateSubscription: builder.mutation({
      query: (quantity) => ({
        url: '/subscription/update_subscription/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { quantity: parseInt(quantity) },
      }),
      invalidatesTags: ['Subscription', 'Profile'],
    }),
  }),
});
export const { useBuySubscriptionMutation, useUpdateSubscriptionMutation } = subscriptionApi;