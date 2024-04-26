import { useEffect, useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 2000);
  });
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blog={blogs} heading={"All blogs"} />}
    </div>
  );
};

export default Home;
