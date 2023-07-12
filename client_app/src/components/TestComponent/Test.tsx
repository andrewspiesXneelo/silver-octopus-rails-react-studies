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
    // Throw error to test ->
    // Dispatch Custom error event -> dispatchEvent(new CustomEvent("error", { detail: "error" }));
    // throw new Error("Test Error");
    // dispatchEvent(
    //   new CustomEvent("error", {
    //     detail: {
    //       message: "error found!",
    //       name: "error",
    //       stack: window.location.href,
    //     },
    //   })
    // );
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
