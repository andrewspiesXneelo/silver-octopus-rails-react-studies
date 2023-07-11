/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import UserService from "../../services/user";

const Test = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const userSrv = new UserService();
    throw new Error("Test Error");
    const fetchUsers = async () => {
      return userSrv.getUsers().then((res) => res);
    };
    fetchUsers().then((res) => setUsers(res));
  }, []);

  return (
    <div className="container">
      <h2>TEST COMPONENT</h2>
      <div className="test-list-container">
        <div className="test-list">
          {users &&
            users.map((user: any) => (
              <div className="test-list-item" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Test;