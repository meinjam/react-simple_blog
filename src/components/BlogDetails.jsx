import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoaging, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleDelete = () => {
      fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: "DELETE"
      }).then(() =>{
        setIsPending(true)
        history.push('/')
      })
    }

    return (
        <div className="blog-details">
            {isLoaging && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by - {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    { !isPending && <button onClick={handleDelete}>Delete</button> }
                    { isPending && <button onClick={handleDelete}>Deleting</button> }
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;