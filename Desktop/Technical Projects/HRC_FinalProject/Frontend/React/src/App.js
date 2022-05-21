import Header from "./components/header";
import React from "react";
import Add from "./components/Add";
import AdvanceSearch from "./components/AdvanceSearch";
import AnalyticsView from "./components/AnalyticsView";
import Deletefun from "./components/Deletefun";
import EditFun from "./components/EditFun";
import Predict from "./components/Predict";
import SearchCustomerId from "./components/SearchCustomerId";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./components/style.css";
import Datagrid from "./components/Datagrid";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>

      <div id="button_group">
        <ButtonGroup id="left">
          <Predict />
          <AnalyticsView />
          <AdvanceSearch />
        </ButtonGroup>

        <ButtonGroup id="mid">
          <SearchCustomerId />
        </ButtonGroup>

        <ButtonGroup id="right">
          <Add />
          <EditFun />
          <Deletefun />
        </ButtonGroup>
      </div>

      <div>
        <Datagrid />
      </div>

      <div id="footer">
        <a href="https://www.highradius.com/terms-of-use/">Copyright</a> 2022
        Highradius Corporation. All Rights Reserved.
      </div>
    </>
  );
};

export default App;
