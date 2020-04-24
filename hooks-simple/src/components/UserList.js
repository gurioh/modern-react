import React from "react";
import useResources from "./useResources";

const UserList = ({ resource }) => {
  const resources = useResources(resource);
  console.log(resources);
  return (
    <ul>
      {resources.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
