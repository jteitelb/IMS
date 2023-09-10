import * as Yup from "yup";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import SubmitButton from "../components/Form/SubmitButton";
import { useState, useEffect } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/products")
      .then((res) => res.json().then((json) => setProductList(json)))
      .catch((err) => {
        console.log(err);
        return [];
      });
  }, []);

  console.log(productList);

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

      <h2 className="mt-5 text-lg font-bold">Current Items</h2>
      <table className="w-3/4 border-2 border-slate-400 text-left">
        <thead>
          <tr>
            <th>Part No</th>
            <th>Item</th>
            <th>UOM</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(({ partno, item, uom, amount }) => {
            return (
              <tr className="even:bg-slate-200 odd:bg-white">
                <td>{partno}</td>
                <td>{item}</td>
                <td>{uom}</td>
                <td>{amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
