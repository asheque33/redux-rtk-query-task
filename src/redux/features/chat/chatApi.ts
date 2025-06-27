import { baseApi } from "@/redux/api/baseApi";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create Chat
    createChat: builder.mutation({
      query: (chat) => ({
        url: 'chat_app/create_chat/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: chat,
      })
    }),
    // Add Message to Chat
    addMessageToChat: builder.mutation({
      query: (message) => ({
        url: '/chat/add_message_to_chat/',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: message,
      }),
      invalidatesTags: ['Chat'],
    }),
    // Get Users Chat List
    getUsersChatList: builder.query({
      query: () => '/chat/get_users_chat_list/',
      providesTags: ['Chat'],
    }),

    // Get Single Chat (endpoint needs to be clarified in backend)
    getSingleChat: builder.query({
      query: (chatId) => `/chat/get_a_single_chat/${chatId}/`,
      providesTags: (result, error, chatId) => [{ type: 'Chat', id: chatId }],
    }),
  })
});
export const { useCreateChatMutation, useAddMessageToChatMutation, useGetUsersChatListQuery, useGetSingleChatQuery } = chatApi;