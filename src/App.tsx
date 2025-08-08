import Navbar from "./components/Navbar";
import { TransactionProvider } from "./context/TransactionContext";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <main className="overflow-x-hidden">
      <TransactionProvider>
        <Navbar />
        <Dashboard />
      </TransactionProvider>
    </main>
  );
}

export default App;
