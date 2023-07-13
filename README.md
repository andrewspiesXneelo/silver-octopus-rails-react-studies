# silver-octopus-rails-react-studies

Repo for learning about Rails APIs used with React (TypeScript) Clients

## Error Provider Test

1. Start local server

```
cd api_app && bin/rails server
```

2. Open a new terminal window
3. Start local client

```
cd client_app && npm run dev
```

4. This will start Vite server and run at [http://localhost:5173](http://localhost:5173)
5. To test a normal error thrown in component, go to `src/components/TestComponent/Text.tsx`, and inside `useEffect` hook uncomment `line 22` which reads `// throw new Error('Test Error')` This will throw an default error type event and will be caught by the `ErrorProvider` and the error will be displayed in the `Error` component.

```tsx
useEffect(() => {
  const userSrv = new UserService();

  const fetchUsers = async () => {
    return userSrv.getUsers().then((res) => res);
  };
  fetchUsers().then((res) => setUsers(res));
  throw new Error("Test Error");
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
```

6. Vite server will rebuild, and the app will reload components and `Error` component should be shown.
7. To test a custom error thrown in component, go to `src/components/TestComponent/Text.tsx`, and inside `useEffect` hook uncomment `line 23 - 29` This will dispatch a custom error event type and will be caught by the `ErrorProvider` and the error will be displayed in the `Error` component.

```tsx
useEffect(() => {
  const userSrv = new UserService();

  const fetchUsers = async () => {
    return userSrv.getUsers().then((res) => res);
  };
  fetchUsers().then((res) => setUsers(res));
  // throw new Error("Test Error");
  dispatchEvent(
    new CustomEvent("error", {
      detail: {
        message: "error found!",
        name: "error",
        stack: window.location.href,
      },
    })
  );
}, []);
```

8. To test api failure change endpoint in `.env.local` file from `http://localhost:3000/api/v1` to `http://localhost:3000/api/v2`. This should cause API calls to fail causing an `unhandled rejection` error to be raised by the `fetch` request.

```
VITE_API_URL=http://localhost:3000/api/v2
```
