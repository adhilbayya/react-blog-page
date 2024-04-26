import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Title 1",
      content: "wfjheiuh iwfu wiu iuf hiwuefh wifuhcbcuvgeuihv",
      author: "Messi",
      id: 1,
    },
    {
      title: "Title 2",
      content: "wfjheiuh iwfu wiu iuf hiwuefh wifuhcbcuvgeuihv",
      author: "Ronaldo",
      id: 2,
    },
    {
      title: "Title 3",
      content: "wfjheiuh iwfu wiu iuf hiwuefh wifuhcbcuvgeuihv",
      author: "Neymar",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const deleteBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(deleteBlog);
  };
  return (
    <div className="home">
      <BlogList
        blog={blogs}
        heading={"All blogs"}
        handleDelete={handleDelete}
      />
      <BlogList
        blog={blogs.filter((blog) => blog.author === "Messi")}
        heading={"Messi's blogs"}
      />
    </div>
  );
};

export default Home;
