import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App: React.FC = () => {
  return (<Provider
    store={store.default}
  >
    <div>
      <h3>Search for repositories</h3>
      <RepositoriesList/>
      
    </div>
  </Provider>);
}

export default App;
