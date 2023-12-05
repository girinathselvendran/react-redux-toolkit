import "./App.css";
import { Customer } from "./Customer";
import { CustomerView } from "./CustomerView";
import { Provider } from "react-redux";
import { Store } from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Customer />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
