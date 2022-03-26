import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RepoApp } from "./RepoApp";
import { ItemDetail } from "./ItemDetail";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RepoApp />} />
      <Route path="/:repository/:name/:id" element={<ItemDetail />} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
