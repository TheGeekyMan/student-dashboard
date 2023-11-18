import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout';
import RoutesComponent from "./common/routes";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <RoutesComponent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
