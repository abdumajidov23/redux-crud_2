import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Users from "../pages/users/Users";
import CreateUser from "../pages/create-user/CreateUser";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Route>
    </Routes>
  );
};

export default Router;
