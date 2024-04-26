const BlogList = ({ blog, heading }) => {
  //   const blog = props.blog;
  //   const heading = props.title;

  return (
    <div className="blog-list">
      {heading}
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
