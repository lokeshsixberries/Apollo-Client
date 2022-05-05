import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphQl/Quires";
import { Link, useParams } from "react-router-dom";

export default function Note() {
  const header = ["Title", "Status", "Descrption"];
  const { loading, error, data } = useQuery(GET_DATA, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container p-0 ml-1">
        <table className="table table-dark table-striped">
          <tbody>
            <tr>
              {header.map((item, index) => {
                return (
                  <>
                    <th key={index}>{item}</th>
                  </>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container p-0 ml-1">
        <table className="table">
          <tbody>
            {(data?.notes || []).map((item, index) => {
              return (
                <>
                  <tr scope="row" className="table-primary">
                    <td>{item.title}</td>
                    <td>{item.status}</td>
                    <td>{item.description}</td>
                    <td>
                      <Link
                        type="button"
                        to={`/update/${item.id}`}
                        className="btn btn-warning ml-4"
                      >
                        Edit Note
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
