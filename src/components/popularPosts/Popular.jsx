/* eslint-disable no-underscore-dangle */
import Error from 'components/ui/Error';
import Loading from 'components/ui/Loading';
import { useGetPostsQuery } from 'features/api/posts/postsApi';
import PopularPosts from './PopularPosts';

function Popular() {
  const {
    data: posts, isLoading, isError, error,
  } = useGetPostsQuery();

  // let's decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error?.error} />;
  } else if (!isLoading && !isError && posts?.length === 0) {
    content = <Error message="There is no posts found!" />;
  } else if (!isLoading && !isError && posts?.length > 0) {
    content = posts?.slice(0, 3).map((post) => <PopularPosts key={post._id} post={post} />);
  }
  return (
    <>
      <div className="">
        <h2 className="text-2xl text-center font-semibold dark:text-white mt-14 uppercase">Your Posts</h2>
      </div>
      <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {content}
        </div>
      </div>
    </>
  );
}

export default Popular;
