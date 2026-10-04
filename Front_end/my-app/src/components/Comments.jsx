

 import React, { useState } from "react";
 import Footer from "./Footer";

function Comments() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showComments, setShowComments] = useState(false);

  // Function to handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setComments([...comments, { name, message }]);
      setName("");
      setMessage("");
    }
  };

  return (
    <>    <div className="App" style={{"height":"350px", "width":"300px", "border":"2px solid black", "marginTop":"150px"}}>
      <h1>Comments</h1>

      {/* Comment Form */}
      <div className="container" style={{"height":"550px"}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Comment:</label>
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{"backgroundColor" : "#f4b400"}}>Add Comment</button>
        </form>

         {/* View Comments Button */}
      <div className="mt-3">
        <button className="btn btn-secondary" onClick={() => setShowComments(!showComments)}>
          {showComments ? "Hide Comments" : "View Comments"}
        </button>
        {showComments && (
        <div className="mt-4" style={{ma:"50px"}}>
          <h3>All Comments:</h3>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            <ul className="list-group">
              {comments.map((c, index) => (
                <li key={index} className="list-group-item">
                  <strong>{c.name}:</strong> {c.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      </div>

     
      </div>


     

      {/* Display Comments */}
      
    </div>
       
       </>

  );
}


export default Comments;
