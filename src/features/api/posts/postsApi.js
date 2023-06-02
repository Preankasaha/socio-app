import { apiSlice } from '../apiSlice';

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: '/post',
        method: 'POST',
        body: data,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      // optimistic update
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(apiSlice.util.updateQueryData('getPost', undefined, (draft) => {
          const indexToDelete = draft.findIndex((post) => post.id === id);
          draft.splice(indexToDelete, 1);
        }));
        try {
          const posts = await queryFulfilled;
        } catch (err) {
          patchResult.undo();
        }
      },
    }),
  }),
});
export const {
  useGetPostsQuery, useGetPostQuery, useAddPostMutation, useDeleteTaskMutation,
} = postsApi;
