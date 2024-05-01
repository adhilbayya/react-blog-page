import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setisError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortConst.signal })
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
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setisError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortConst.abort();
  }, [url]);

  return { blogs, isPending, isError };
};

export default useFetch;
