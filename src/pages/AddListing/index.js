import React from "react";
import { userIsAuthenticated } from "@hoc";
import { Layout, WithSidebar } from "@containers";

import Form from "./Form/";

const AddListing = () => {
  return (
    <Layout>
      <WithSidebar>
        <Form />
      </WithSidebar>
    </Layout>
  );
};

export default userIsAuthenticated(AddListing);
