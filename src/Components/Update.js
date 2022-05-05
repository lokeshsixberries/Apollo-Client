import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DATA_BY_ID } from "../graphQl/Quires";
import { UPDATE_DATA } from "../graphQl/Mutations";

export default function Update() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  let { id } = useParams();

  const [updateNote, { error }] = useMutation(UPDATE_DATA, {
    onCompleted: () => {
      setIsRedirect(true);
    },
  });

  const { loading } = useQuery(GET_DATA_BY_ID, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      setTitle(data?.note?.title);
      setDesc(data?.note?.description);
      setStatus(data?.note?.status);
    },
  });

  const UpdateData = () => {
    updateNote({
      variables: {
        id: id,
        title: title,
        status: status,
        description: desc,
      },
    });

    if (error) {
      console.log(error);
    }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              id="inputState"
              className="form-select"
              placeholder="Status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
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
              value={desc}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => UpdateData()}
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
