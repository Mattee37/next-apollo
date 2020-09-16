import Agent from "../components/Agent";

import useAgentes from "../hooks/useAgentes";

export default Response = () => {
  const { agents } = useAgentes();
  return (
    <div>
      <h3>Lista de Agentes</h3>
      {agents.length !== 0 ? (
        agents.map((agent) => <Agent agent={agent} key={agent.id} />)
      ) : (
        <h3>No hay Agentes para mostrar!</h3>
      )}
    </div>
  );
};
