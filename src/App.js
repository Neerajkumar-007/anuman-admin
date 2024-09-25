import { ToastContainer } from "react-toastify";
import RoutesPage from "./routes/Routes";
// import Loader from "./components/loader/Loader";
function App() 
{
  return( 
    <div className="App">
    <ToastContainer />
    {/* <Loader /> */}
      <RoutesPage />
    </div>
  );
}

export default App;
