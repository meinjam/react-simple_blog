import BlogList from "./components/BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoaging, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoaging && <div>Loading.....</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
