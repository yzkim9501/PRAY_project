import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/Home.js";
import Project from "./views/Project.js";
import Sample from "./views/Sample.js";
import ReactP from "./views/ReactP.js";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "./components/Navbars/DemoNavbar.js";
import CardsFooter from "./components/Footers/CardsFooter.js";

// index page sections
import Hero from "./views/IndexSections/Hero.js";
import Buttons from "./views/IndexSections/Buttons.js";
import Inputs from "./views/IndexSections/Inputs.js";
import CustomControls from "./views/IndexSections/CustomControls.js";
import Menus from "./views/IndexSections/Menus.js";
import Navbars from "./views/IndexSections/Navbars.js";
import Tabs from "./views/IndexSections/Tabs.js";
import Progress from "./views/IndexSections/Progress.js";
import Pagination from "./views/IndexSections/Pagination.js";
import Pills from "./views/IndexSections/Pills.js";
import Labels from "./views/IndexSections/Labels.js";
import Alerts from "./views/IndexSections/Alerts.js";
import Typography from "./views/IndexSections/Typography.js";
import Modals from "./views/IndexSections/Modals.js";
import Datepicker from "./views/IndexSections/Datepicker.js";
import TooltipPopover from "./views/IndexSections/TooltipPopover.js";
import Carousel from "./views/IndexSections/Carousel.js";
import Icons from "./views/IndexSections/Icons.js";
import Login from "./views/IndexSections/Login.js";
import Download from "./views/IndexSections/Download.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route 
        path="/tw" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route
        path="/projects"
        exact
        render={props => <Project {...props} />}
      />
	  <Route
        path="/reactP"
        exact
        render={props => <ReactP {...props} />}
      />
	  <Route
        path="/sample"
        exact
        render={props => <Sample {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);