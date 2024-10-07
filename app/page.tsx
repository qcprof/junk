import Counter from "./components/Counter";
import GetTime from "./components/GetTime";

//import GetTime from './components/GetTime'
export default function Home() {
  return (
    <main>
      <h1 className="text-red-800">Home</h1>
      <p>Added Changes for github.</p>
      <GetTime />
      <Counter />
    </main>
  );
}
