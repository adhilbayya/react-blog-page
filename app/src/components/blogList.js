const BlogList = ({ blog, heading, handleDelete }) => {
  //   const blog = props.blog;
  //   const heading = props.title;

  return (
    <div className="blog-list">
      <h2>{heading}</h2>

      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
