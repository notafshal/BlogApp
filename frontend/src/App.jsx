import NavBar from "./components/NavBar";
import Router from "./routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <Router />
      <NavBar />
    </>
  );
};
export default App;
