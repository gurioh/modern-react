import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("users");
  const [currentCount, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        <button onClick={() => setResource("users")}>Users</button>
      </div>
      <UserList resource={resource} />
    </div>
  );
};

export default App;
