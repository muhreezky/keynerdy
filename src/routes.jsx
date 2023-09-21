import App from "./App";
import Play from "./components/Play";
import Help from "./components/Help";

const routes = [
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "play",
    element: <Play />
  }, 
  {
    path: "help",
    element: <Help />
  }
];

export default routes;