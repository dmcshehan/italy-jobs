import React from "react";

import { userIsNotAuthenticated } from "@hoc";

import { Layout } from "@containers";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default userIsNotAuthenticated(Login);
