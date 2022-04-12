import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    api
      .get("me")
      .then((response) => console.log(response))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <strong>{user?.email}</strong>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  // const response = await apiClient.get("me");
  return {
    props: {},
  };
});
