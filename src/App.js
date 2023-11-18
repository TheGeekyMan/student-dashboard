import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout';
import Routes from "./common/routes";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
