/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import UserService from "../../services/user";
// import AltTest from "./Alt_Test";

interface TestUser {
  id: number;
  name?: string;
  email?: string;
}

const Test = () => {
  const [users, setUsers] = useState<TestUser[]>([]);

  useEffect(() => {
    const userSrv = new UserService();
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
            users.map((user: TestUser) => (
              <div key={user.id}>
                <div className="test-list-item">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
                {/* <AltTest
                  testData={
                    "Here is a piece of data passed to the child AltTest prop"
                  }
                /> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
