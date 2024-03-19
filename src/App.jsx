import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";


const App = () => {
  return (
    <div className="bg-teal h-screen max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Pricing></Pricing>
    </div>
  );
};

export default App;