type User = {
    id:number
    name: string
}

export default async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
//   console.log(users)
  return (
    <main>
      <h1 >Users Page</h1>
      {
      users.map((user: User) => (
        <div key={user.id}>{user.name}</div>
      ))}
      
    </main>
  );
}
