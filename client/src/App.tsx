// import { useEffect, useState } from "react";
import FormField from "./components/Form/FormField";
import Form from "./components/Form/Form";
import SubmitButton from "./components/Form/SubmitButton";
import * as Yup from "yup";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("http://127.0.0.1:3000/");
  //     const data = await res.json();
  //     console.log(data);
  //     setData(data);
  //   };
  //   getData();
  // }, []);

  const initialValues = {
    partno: "",
    item: "",
    uom: "",
    amount: "",
  };

  const validationSchema = Yup.object().shape({
    partno: Yup.string().required().label("Part No."),
    Item: Yup.string().required().label("Item"),
    uom: Yup.string().required().max(4).label("UOM"),
    amount: Yup.number().required().label("amount"),
  });

  const handleSubmit = (values: object) => {
    console.log(values);
  };

  return (
    <div className="bg-slate-300 h-screen w-screen">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField label="Part No." name="partno" type="text" />
        <FormField label="Item" name="item" type="text" />
        <FormField label="UOM" name="uom" type="text" />
        <FormField label="Amount" name="amount" type="number" />
        <SubmitButton title="Add" />
      </Form>
    </div>
  );
}

export default App;
