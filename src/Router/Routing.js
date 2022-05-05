import { Route, Routes } from "react-router-dom";
import React from "react";
import Note from "../Components/Note";
import Form from "../Components/Form";
import Find from "../Components/Find";
import Update from "../Components/Update";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/create" element={<Form />} />
        <Route path="/lists" element={<Note />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/findbyid" element={<Find />} />
      </Routes>
    </>
  );
}
