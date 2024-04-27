import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setisError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("The link is not found");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setisError(null);
        })
        .catch((err) => {
          setisError(err.message);
          setIsPending(false);
        });
    }, 1000);
  });

  return { blogs, isPending, isError };
};

export default useFetch;
