import React, { useState } from "react";
import { GET_DATA_BY_ID } from "../graphQl/Quires";
import { useQuery } from "@apollo/client";
export default function Find() {
  const [find, setFind] = useState("");
  const { loading, error, data } = useQuery(GET_DATA_BY_ID, {
    variables: {
      id: find,
    },
  });
  console.log(data);
  return (
    <>
      <div
        className="container p-5 d-flex"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <div className="col-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Username"
              onChange={(e) => setFind(e.target.value)}
            />
          </div>
        </div>
      </div>

      {data ? (
        <div>
          <table className="table" style={{ border: "1px solid red" }}>
            <tbody>
              <tr>
                <th>{data.note.title}</th>
                <th>{data.note.status}</th>
                <th>{data.note.description}</th>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}
