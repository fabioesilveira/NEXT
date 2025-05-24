import Link from "next/link";
import UserRow from "./components/userRow";

export default function Home() {
  
    const users = [
    { id: 1, name: "Fabio", email: "fabio@gmail.com", address: "Sao Paulo" },
    { id: 2, name: "Allan", email: "allan@gmail.com", address: "Natal" },
    { id: 3, name: "Gabriela", email: "gaby@hotmail.com", address: "Ipatinga" },
  ];
  
  return (
    <>
    <div>
      <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, i) => (
            <UserRow key={e.id} user={e} />
          ))}
        </tbody>
      </table>
    </div>
    <Link href="/users">
    <button>GO TO USERS</button>
    </Link>
    </>
  )
}