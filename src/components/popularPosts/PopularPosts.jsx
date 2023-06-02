/* eslint-disable react/prop-types */
function PopularPosts({ post }) {
  const {
    description, dateCreated, imgLink, comments, userName,
  } = post || {};
  return (

    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img
        src={imgLink}
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="p-5 border border-t-0">
        <div className="flex items-center justify-between">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              {userName}
            </a>
            <span className="text-gray-600">
              —
              {' '}
              {new Date(dateCreated).toLocaleDateString()}
              {' '}
              {new Date(dateCreated).toLocaleTimeString()}
            </span>
          </p>
          <button type="button" className="pl-4 -mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>
        <p className="mb-2 text-gray-700">
          {description?.slice(0, 100)}
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Details
        </a>
      </div>
    </div>

  );
}

export default PopularPosts;
