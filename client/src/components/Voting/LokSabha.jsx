import React, { useState } from "react";

import Layout from "../Layout";
import VoteAuth from "./Auth";
import VotingPage from "./Vote";

function LokSabha({}) {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <Layout bgColor={"bg-blue-50"}>
      {!authenticated && <VoteAuth setAuthenticated={setAuthenticated} />}
      {authenticated && <VotingPage />}
    </Layout>
  );
}

export default LokSabha;
