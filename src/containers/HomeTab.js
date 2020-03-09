import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeAddInf, changeMainInf } from "../redux/actions/dashBoardActions";
import { Formik, useField } from "formik";
import { Button, Form as AntdForm, Input } from "antd";
import * as yup from "yup";
import {
  Link,
  Route,
  useRouteMatch,
  Switch,
  useLocation
} from "react-router-dom";

const Wrapper = styled.div`
  min-height: 480px;
  margin-left: 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  @media (max-width: 700px) {
    width: 325px;
  }
  div.tabs {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: self-start;
    a {
      width: 100%;
    }
  }
  div.fields {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const validationSchema1 = yup.object().shape({
  userName: yup
    .string()
    .required("User Name required")
    .min(3)
    .max(10),
  email: yup.string().email(),
  password: yup
    .string()
    .min(3)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Password confirm is required")
});
const validationSchema2 = yup.object().shape({
  street: yup.string().required(),
  houseNumber: yup.string().required(),
  postalCode: yup.string().required(),
  country: yup.string().required()
});

const Tab = styled.div`
  width: 100%;
  background-color: ${props => (props.active ? "white" : "#d8d8d8")};
  cursor: pointer;
  color: black;
  text-align: center;
  a {
    text-decoration: unset;
    color: black;
  }
`;

const Item = styled(AntdForm.Item)`
  margin-bottom: 0;
`;
const ItemFlex = styled(AntdForm.Item)`
  margin-bottom: 0;
  display: flex;
  justify-content: flex-end;
`;
const formItemLayout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 14
  }
};
const FieldInput = ({ placeholder, label, style, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const validateStatus = meta.error && meta.touched ? "error" : "success";
  return (
    <Item
      {...field}
      style={style}
      label={label}
      help={errorText}
      validateStatus={validateStatus}
      hasFeedback={meta.touched}
    >
      <Input
        placeholder={placeholder}
        id={label}
        defaultValue={props.defaultValue}
      />
    </Item>
  );
};
const FieldPassword = ({ placeholder, label, style, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const validateStatus = meta.error && meta.touched ? "error" : "success";

  return (
    <Item
      {...field}
      style={style}
      label={label}
      help={errorText}
      validateStatus={validateStatus}
      hasFeedback={meta.touched}
    >
      <Input.Password
        placeholder={placeholder}
        id={label}
        defaultValue={props.defaultValue}
      />
    </Item>
  );
};

const PasswordLine = styled.div`
  width: 15px;
  height: 4px;
  margin-left: 5px;
  display: inline-flex;
  background-color: ${props => (props.active ? "green" : "red")};
  border: 1px solid gray;
`;

const HomeTab = props => {
  const {
    userName,
    email,
    password,
    confirmPassword,
    street,
    houseNumber,
    postalCode,
    country
  } = props.dash;
  const MainInfo = () => {
    return (
      <div className="fields">
        <div style={{ width: "100%" }}>
          <Formik
            initialValues={{
              userName,
              email,
              password,
              confirmPassword
            }}
            validationSchema={validationSchema1}
            onSubmit={async ({
              userName,
              email,
              password,
              confirmPassword
            }) => {
              await new Promise(resolve => setTimeout(resolve, 2000));
              alert(
                JSON.stringify(
                  { userName, email, password, confirmPassword },
                  null,
                  2
                )
              );
              props.changeMainInf(userName, email, password, confirmPassword);
            }}
          >
            {({ values, isSubmitting, handleSubmit }) => (
              <AntdForm {...formItemLayout} onFinish={handleSubmit}>
                <FieldInput
                  placeholder={"UserName"}
                  label={"User Name"}
                  name={"userName"}
                  defaultValue={values.userName}
                />
                <FieldInput
                  placeholder={"Email"}
                  name={"email"}
                  label={"Email"}
                  defaultValue={values.email}
                />
                <FieldPassword
                  placeholder={"Password"}
                  name={"password"}
                  label={"Password"}
                  style={{ marginBottom: "0!important" }}
                  defaultValue={values.password}
                />
                <ItemFlex>
                  <PasswordLine active={values.password.length > 2} />
                  <PasswordLine active={values.password.length > 4} />
                  <PasswordLine active={values.password.length > 6} />
                  <PasswordLine active={values.password.length > 8} />
                  <PasswordLine active={values.password.length > 10} />
                </ItemFlex>
                <FieldPassword
                  placeholder={"Repeat Password"}
                  name={"confirmPassword"}
                  label={"Confirm Password"}
                  defaultValue={values.confirmPassword}
                />

                <Item {...tailLayout}>
                  <Button htmlType="submit" disabled={isSubmitting}>
                    Update
                  </Button>
                </Item>
              </AntdForm>
            )}
          </Formik>
        </div>
      </div>
    );
  };
  const AddInfo = () => {
    return (
      <div className="fields">
        <div style={{ width: "100%" }}>
          <Formik
            initialValues={{
              street,
              houseNumber,
              postalCode,
              country
            }}
            validationSchema={validationSchema2}
            onSubmit={async ({ street, houseNumber, postalCode, country }) => {
              await new Promise(resolve => setTimeout(resolve, 2000));
              alert(
                JSON.stringify(
                  { street, houseNumber, postalCode, country },
                  null,
                  2
                )
              );
              props.changeAddInf(street, houseNumber, postalCode, country);
            }}
          >
            {({ values, isSubmitting, handleSubmit }) => (
              <AntdForm {...formItemLayout} onFinish={handleSubmit}>
                <FieldInput
                  placeholder={"Street"}
                  label={"Street"}
                  name={"street"}
                  defaultValue={values.street}
                />
                <FieldInput
                  placeholder={"House Number"}
                  label={"House Number"}
                  name={"houseNumber"}
                  defaultValue={values.houseNumber}
                />
                <FieldInput
                  placeholder={"Postal Code"}
                  label={"Postal Code"}
                  name={"postalCode"}
                  defaultValue={values.postalCode}
                />
                <FieldInput
                  placeholder={"Country"}
                  label={"Country"}
                  name={"country"}
                  defaultValue={values.country}
                />

                <Item {...tailLayout}>
                  <Button htmlType="submit" disabled={isSubmitting}>
                    Update
                  </Button>
                </Item>
              </AntdForm>
            )}
          </Formik>
        </div>
      </div>
    );
  };
  let { path, url } = useRouteMatch();
  let { pathname } = useLocation();
  return (
    <Wrapper>
      <div className="tabs">
        <Link to={`${url}`}>
          <Tab active={pathname === `${url}`}>Main Information</Tab>
        </Link>
        <Link to={`${url}/Add`}>
          <Tab active={pathname === `${url}/Add`}>Additional Information</Tab>
        </Link>
      </div>
      <Switch>
        <Route exact path={`${path}`}>
          <MainInfo />
        </Route>
        <Route exact path={`${path}/Add`}>
          <AddInfo />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const mapProps = state => {
  return {
    dash: state.dash
  };
};

export default connect(mapProps, { changeMainInf, changeAddInf })(HomeTab);
