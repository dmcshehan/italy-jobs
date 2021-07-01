import React from "react";
import { userIsAuthenticated } from "@hoc";
import { Layout, WithSidebar } from "@containers";

import AddListingForm from "./AddListingForm";

const AddListing = () => {
  return (
    <Layout>
      <WithSidebar>
        <AddListingForm />
      </WithSidebar>
    </Layout>
  );
};

export default userIsAuthenticated(AddListing);
