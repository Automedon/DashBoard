import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 30px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(220, 224, 96);
  background: linear-gradient(
    90deg,
    rgba(220, 224, 96, 1) 0%,
    rgba(42, 119, 103, 1) 100%
  );
  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.75);
  div.text {
    padding-left: 5%;
    color: #0b746d;
    font-weight: 800;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    span.g {
      color: #d3a30f;
    }
    span.loft {
      font-size: 11px;
      border: 2px solid #0b746d;
      margin-left: 3px;
    }
  }
  div.icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-right: 5%;
    max-width: 100%;
    color: white;
    i {
      color: white;
      padding: 0 10px;
      cursor: pointer;
      span {
        padding-left: 5px;
      }
      div.yellowCircle {
        height: 5px;
        width: 5px;
        background-color: orange;
        border: 1px solid white;
        border-radius: 50%;
        position: relative;
        left: 12px;
        top: -5px;
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="text">
        ENER <span className="g">G</span>IE <span className="loft">LOFT</span>
      </div>
      <div className="icons">
        <i className="fa fa-globe" aria-hidden="true">
          <span>EN</span>
        </i>

        <i className="fa fa-envelope">
          <div className="yellowCircle" />
        </i>

        <i className="fa fa-bell">
          <div className="yellowCircle" />
        </i>
      </div>
    </Wrapper>
  );
};

export default Header;
