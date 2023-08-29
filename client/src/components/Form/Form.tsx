import { Formik, FormikValues } from "formik";

interface FormProps {
  children: any;
  onSubmit: any;
  validationSchema: any;
  initialValues: FormikValues;
}

const Form = ({
  children,
  onSubmit,
  validationSchema,
  initialValues,
}: FormProps) => {
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
