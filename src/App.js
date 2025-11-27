import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Dashboard from "./pages/Dashboard";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  );
}

export default App;