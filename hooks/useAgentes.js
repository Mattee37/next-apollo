import { useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://bienesraices-137.herokuapp.com/graphql",
});

const useAgentes = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await client.query({
        query: gql`
          {
            agentes {
              email
              id
              nombre
              telefono
            }
          }
        `,
      });
      setAgents(res.data.agentes);
    };
    getData();
  }, []);
  return { agents };
};

export default useAgentes;
