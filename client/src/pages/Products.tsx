import * as Yup from "yup";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import SubmitButton from "../components/Form/SubmitButton";

const Products = () => {
  const initialValues = {
    partno: "",
    item: "",
    uom: "",
    amount: "",
  };

  const validationSchema = Yup.object().shape({
    partno: Yup.string().required().label("Part No."),
    item: Yup.string().required().label("Item"),
    uom: Yup.string().required().max(4).label("UOM"),
    amount: Yup.number().required().label("amount"),
  });

  const handleSubmit = (values: object) => {
    console.log("hi");
    console.log(values);
  };

  return (
    <div className="w-full h-full p-2">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField label="Part No" name="partno" type="text" />
        <FormField label="Item" name="item" type="text" />
        <FormField label="UOM" name="uom" type="text" />
        <FormField label="Amount" name="amount" type="number" />
        <SubmitButton title="Add" />
      </Form>
    </div>
  );
};

export default Products;
