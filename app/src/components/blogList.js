const BlogList = (props) => {
  const blog = props.blog;

  return (
    <div className="blog-list">
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
