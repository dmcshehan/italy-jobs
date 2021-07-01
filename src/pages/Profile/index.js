import React from "react";
import { userIsAuthenticated } from "@hoc";

import { Layout, WithSidebar } from "@containers";

const Dashboard = () => {
  return (
    <Layout>
      <WithSidebar>
        <h1>Profile</h1>
      </WithSidebar>
    </Layout>
  );
};

export default userIsAuthenticated(Dashboard);
