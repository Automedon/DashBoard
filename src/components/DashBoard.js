import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import HomeTab from "../containers/HomeTab";

const Wrapper = styled.section`
  max-width: 100%;
  margin: 10% 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  div.menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: self-start;
    @media (max-width: 700px) {
      width: 100%;
      margin-bottom: 20px;
      align-items: center;
    }
    div.oneMenu {
      padding-top: 10px;
      min-width: 120px;
      i {
        width: 19px;
        margin-right: 10px;
      }
      a {
        color: black;
        text-decoration: unset;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
  div.dashboard {
    margin-left: 10px;
  }
`;

const menu = [
  { name: "Home", icon: "fa fa-home" },
  { name: "My Account", icon: "fa fa-bullhorn" },
  { name: "My Company", icon: "fa fa-building" },
  { name: "My Settings", icon: "fa fa-cog" },
  { name: "News", icon: "fa fa-newspaper-o" },
  { name: "Analytics", icon: "fa fa-area-chart" }
];

const DashBoard = () => {
  const renderMenu = menu.map(({ name, icon }) => (
    <div className="oneMenu" key={name + icon}>
      <i className={icon} />
      <Link to={name}>{name}</Link>
    </div>
  ));
  return (
    <Wrapper>
      <div className="menu">{renderMenu}</div>
      <div className="dashboard">
        <Switch>
          <Route path="/Home">
            <HomeTab />
          </Route>
          <Route>
            <div>Under construction...</div>
          </Route>
        </Switch>
      </div>
    </Wrapper>
  );
};

export default DashBoard;
