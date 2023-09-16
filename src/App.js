import ImplementList from "./components/ListItemPattern/implementList";
import ImplementSplite from "./components/splitScreen/implementSplite";

function App() {
  return (
    <div className="App">
      {/* this is splite  screen pattern */}
      <ImplementSplite />
      {/* List and item Pattern  */}
      <ImplementList />
    </div>
  );
}

export default App;
