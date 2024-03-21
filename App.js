import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./states/store";
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

export default function App() {
  console.reportErrorsAsExceptions = false;
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
