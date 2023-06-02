import { useAddPostMutation } from 'features/api/posts/postsApi';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const [addPost, {
    data: postData, isLoading, isError, error,
  }] = useAddPostMutation();

  const navigate = useNavigate();

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form?.description?.value;
    const taskImage = form?.image.files[0];
    // const userEmail = user?.email;
    const formData = new FormData();
    formData.append('image', taskImage);
    const url = 'https://api.imgbb.com/1/upload?key=e19b393a26210d33d7b1273cca0d1db1';
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const imgData = await res.json();
    const data = {
      description,
      imgLink: imgData.data.url,
      isLiked: false,
      comments: [],
      userEmail: 'preansaha@gmail.com',
      userName: 'Preanka Saha',
      dateCreated: new Date().toJSON(),
    };
    console.log(data);
    addPost(data);
    form.reset();
    navigate('/media');

    // toast.success("post added successfully");
  };
  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0 mt-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold dark:text-white">Add Post</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            {/* <label htmlFor="task">Task Description</label> */}
            <textarea name="description" id="description" cols={30} rows={5} className="w-full px-1 py-1 form-textarea border-indigo-300 dark:bg-gray-100 rounded-sm" placeholder="Write your post here..." required />
          </div>
          <div>
            <input type="file" name="image" id="image" className="w-full px-1 py-1 form-input border-indigo-300 rounded-sm dark:bg-gray-100" accept="image/*" required />
          </div>
          <div>
            <button type="submit" className="w-full px-1 py-1 bg-indigo-600 text-white font-semibold rounded-sm">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
