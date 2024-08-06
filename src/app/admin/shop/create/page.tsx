"use client";
import Input from "@/components/Input";
import { ShopType } from "@/constants/types";
import ShopService from "@/services/ShopService";
import { Button, Grid } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const emptyShop: ShopType = {
  name: "",
  address: "",
  logoUrl: "",
  email: "",
  contact: "",
};
const CreateShopAdminPage = () => {
  const [formikInitialVals, setFormikInitialVals] =
    useState<ShopType>(emptyShop);

  const onFormSubmit = (
    values: ShopType,
    formikHelpers: FormikHelpers<ShopType>
  ) => {
    ShopService.getInstance()
      .createShop(values)
      .then((res) => {
        formikHelpers.resetForm();
      });
    console.log(values);
  };
  return (
    <div className="card p-5">
      <h3 className="page-title">Register new shop</h3> <hr />
      <Formik
        initialValues={formikInitialVals}
        onSubmit={onFormSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required().min(3).max(50),
          address: Yup.string().required().min(3).max(100),
          logoUrl: Yup.string().url().required(),
          email: Yup.string().email().required(),
          contact: Yup.string().required().min(10).max(13),
        })}
        enableReinitialize
      >
        <Form>
          <Grid container className="mt-3">
            <Grid xs={12} md={6}>
              <Input
                name="name"
                type="text"
                id="shopNameInput"
                label="Shop Name"
              />
            </Grid>
            <Grid xs={12} md={3}>
              <Input
                name="email"
                type="email"
                id="shopEmailInput"
                label="Shop Email"
              />
            </Grid>
            <Grid xs={12} md={3}>
              <Input
                name="contact"
                type="text"
                id="shopContactInput"
                label="Shop Contact Number"
              />
            </Grid>

            <Grid xs={12}>
              <Input
                name="logoUrl"
                type="url"
                id="shopLogoUrlInput"
                label="Shop Logo URL"
              />
            </Grid>
            <Grid xs={12}>
              <Input
                name="address"
                type="text"
                id="shopAddressInput"
                label="Shop Address"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            className="ms-2 mt-2"
            size="large"
          >
            Register Shop
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateShopAdminPage;
