import { resolve } from "path";

export default async function UserPage() {
  const user = await getUsers();
  return (
    <ul>
      {user.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
const getUsers = async () => {
  await delay(3000);
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json(),
  );
};
const delay = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
