import React from "react";
import { Layout } from "@containers";

import SignupForm from "./SignupForm/";

import { userIsNotAuthenticated } from "@hoc";

const Signup = () => {
  return (
    <Layout>
      <SignupForm />
    </Layout>
  );
};

export default userIsNotAuthenticated(Signup);
