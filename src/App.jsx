import Charts from "./Components/Charts";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";


const App = () => {
  return (
    <div className="bg-teal h-screen max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <div className="w-full mx-auto">
        <Charts></Charts>
      </div>
    </div>
  );
};

export default App;