import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mehedi Hasan Sujon");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const forTitle = (e) => {
    setTitle(e.target.value);
  };
  const forBody = (e) => {
    setBody(e.target.value);
  };
  const forAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const blog = { title, body, author };
    // console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("New bolg added.");
        setIsPending(false);
        // history.go(-1);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title:</label>
        <input type="text" required value={title} onChange={forTitle} />
        <label htmlFor="">Blog body:</label>
        <textarea required value={body} onChange={forBody}></textarea>
        <label htmlFor="">Author:</label>
        <select value={author} onChange={forAuthor}>
          <option value="Mehedi Hasan Sujon">Mehedi Hasan Sujon</option>
          <option value="Asif Uz Zaman">Asif Uz Zaman</option>
        </select>
        {!isPending && <button>Sumbit</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
