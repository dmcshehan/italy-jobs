import React from "react";
import { userIsAuthenticated } from "@hoc";
import { Layout, WithSidebar } from "@containers";

import Listings from "./Listings";

const MyListings = () => {
  return (
    <Layout>
      <WithSidebar>
        <Listings />
      </WithSidebar>
    </Layout>
  );
};

export default userIsAuthenticated(MyListings);
