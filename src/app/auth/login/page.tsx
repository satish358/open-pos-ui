"use client";
import React from "react";
import styles from "../style.module.css";
import Input from "@/components/Input";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button } from "@mui/material";
import classNames from "classnames";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const onSubmit = (values: any) => {
    authService.login(values, router);
    console.log("VALUES: ", values);
  };
  const formikConfig = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter valid email.")
        .required("Email field required."),
      password: Yup.string().required("Password is required."),
    }),
  };
  return (
    <div className={styles.authContainer}>
      <div className={classNames("card", styles.authCardBody)}>
        <h3>Login Form</h3>
        <Formik
          initialValues={formikConfig.initialValues}
          validationSchema={formikConfig.validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Input
              name="email"
              id="emailInput"
              required
              label="Email"
              type="email"
            />
            <Input
              name="password"
              id="passwordInput"
              required
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              variant="outlined"
              size="large"
              className="mt-3"
            >
              Login
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
