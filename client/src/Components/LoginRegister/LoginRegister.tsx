import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Axios from "axios";
import * as yup from "yup";
import { Formik } from "formik";
import UserContext from "../../context/UserContext";
import { Container, Title, Content, Form, Button } from "./styles";

import Portal from "../Portal/Portal";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userData = useContext(UserContext);

  let loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  let registerSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    passwordCheck: yup.string().required(),
    username: yup.string().required(),
  });

  return (
    params.get("login") && (
      <Portal closeModal={() => history.push("/")}>
        <Container>
          <Title>
            <span
              style={{ color: activeTab === "login" ? "white" : "gray" }}
              onClick={() => setActiveTab("login")}
            >
              Login
            </span>
            <span
              style={{ color: activeTab === "register" ? "white" : "gray" }}
              onClick={() => setActiveTab("register")}
            >
              Register
            </span>
          </Title>
          <Content>
            {activeTab === "login" ? (
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={async (values) => {
                  const loginRes = await Axios.post("/login", values);
                  userData?.setUser({
                    token: loginRes.data.token,
                    user: loginRes.data.user.username,
                  });
                  localStorage.setItem("auth-token", loginRes.data.token);
                  history.push("/");
                }}
                validationSchema={loginSchema}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Type your username"
                      onChange={props.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Type your password"
                      onChange={props.handleChange}
                    />
                    <Button type="submit">Log in</Button>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  passwordCheck: "",
                  username: "",
                }}
                onSubmit={async (values) => {
                  await Axios.post("/register", values);
                  const loginRes = await Axios.post("/login", {
                    username: values.username,
                    password: values.password,
                  });
                  userData?.setUser({
                    token: loginRes.data.token,
                    user: loginRes.data.user.username,
                  });
                  localStorage.setItem("auth-token", loginRes.data.token);
                  history.push("/");
                }}
                validationSchema={registerSchema}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Type your email"
                      onChange={props.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Type your password"
                      onChange={props.handleChange}
                    />
                    <label htmlFor="passwordCheck">Confirm password</label>
                    <input
                      type="password"
                      id="passwordCheck"
                      name="passwordCheck"
                      placeholder="Confirm your password"
                      onChange={props.handleChange}
                    />

                    <label htmlFor="username">Username</label>
                    <input
                      type="username"
                      id="username"
                      name="username"
                      placeholder="Type your username"
                      onChange={props.handleChange}
                    />
                    <Button type="submit">Sign up</Button>
                  </Form>
                )}
              </Formik>
            )}
          </Content>
        </Container>
      </Portal>
    )
  );
};

export default LoginRegister;
