import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const { blogs, isPending, isError } = useFetch(`http://localhost:8000/blogs`);
  return (
    <div className="home">
      {isError && <div>{isError}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blog={blogs} heading={"All blogs"} />}
    </div>
  );
};

export default Home;
