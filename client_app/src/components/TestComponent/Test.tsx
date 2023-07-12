import { useEffect, useState } from "react";
import UserService from "../../services/user";

interface TestUser {
  id: number;
  name: string;
  email: string;
}

const Test = () => {
  const [users, setUsers] = useState<TestUser[]>([]);

  useEffect(() => {
    const userSrv = new UserService();

    const fetchUsers = async () => {
      return userSrv.getUsers().then((res) => res);
    };
    fetchUsers().then((res) => setUsers(res));
    throw new Error("Test Error");
    // Throw error to test -> throw new Error("Test Error");
  }, []);

  return (
    <div className="container">
      <h2>TEST COMPONENT</h2>
      <div className="test-list-container">
        <div className="test-list">
          {users &&
            users.map((user: TestUser) => (
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
