import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { LOAD_DATA } from "../graphQl/Mutations";

export default function Form() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  const [addNote, { error }] = useMutation(LOAD_DATA, {
    onCompleted: () => {
      setIsRedirect(true);
    },
  });

  const postData = () => {
    addNote({
      variables: {
        title: title,
        status: status,
        description: desc,
      },
    });
    if (error) {
      console.log(error);
    }

    // window.location.replace("/lists");
  };

  if (isRedirect) {
    return <Navigate to="/lists" />;
  }

  return (
    <>
      <div className="container pt-5">
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Title Here..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              id="inputState"
              className="form-select"
              placeholder="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Choose Status...</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="In End">In End</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="col-12">
            <textarea
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="description Here..."
              rows={5}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => postData()}
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
