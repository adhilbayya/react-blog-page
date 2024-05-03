import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    blogs: blog,
    isPending,
    isError,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  const history = useNavigate();
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by <b>{blog.author}</b>
          </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
