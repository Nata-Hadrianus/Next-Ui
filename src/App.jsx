import Cartao from "./Components/Card.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="flex gap-2 pt-6 mt-6 gradient-bg">
      <section className="flex items-center justify-center w-full h-full">
        <Cartao className="text-center" />
      </section>
    </div>
  );
}
