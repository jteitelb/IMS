import { Formik } from "formik";
import React from "react";

const Form = ({ children, onSubmit, validationSchema, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
