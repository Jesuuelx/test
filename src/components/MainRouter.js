import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RepoApp } from "./RepoApp";
import { ItemDetail } from "./ItemDetail";
import { Comments } from "./Comments";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RepoApp />} />
      <Route path="/:repository/:name/:id" element={<ItemDetail />} />
      <Route path="/comentarios/:repository/:name/:error" element={<Comments />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
