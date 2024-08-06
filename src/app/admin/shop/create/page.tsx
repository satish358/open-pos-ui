"use client";
import Input from "@/components/Input";
import { Button, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

const CreateShopAdminPage = () => {
  return (
    <div className="card p-5">
      <h3 className="page-title">Register new shop</h3> <hr />
      <Formik initialValues={{}} onSubmit={() => {}}>
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
