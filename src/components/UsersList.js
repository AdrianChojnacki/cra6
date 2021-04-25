import React from "react";
import "./UsersList.css";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <li key={user.login.uuid} className="user">
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`} </h4>
      <h4>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </h4>
    </li>
  ));

  return <ul>{users}</ul>;
};

export default UsersList;
