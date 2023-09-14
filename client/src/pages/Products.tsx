import * as Yup from "yup";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import SubmitButton from "../components/Form/SubmitButton";
import ProductTable from "../components/ProductTable";
import { useState, useEffect } from "react";

export interface Product {
  partno: string;
  item: string;
  uom: string;
  amount: string;
}

const Products = () => {
  const [productList, setProductList]: any = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/products")
      .then((res) => res.json().then((json) => setProductList(json)))
      .catch((err) => {
        console.log(err);
        return [];
      });
  }, []);

  const initialValues: Product = {
    partno: "",
    item: "",
    uom: "",
    amount: "",
  };

  const validationSchema = Yup.object().shape({
    partno: Yup.string().required().label("Part No."),
    item: Yup.string().required().label("Item"),
    uom: Yup.string().required().max(4).label("UOM"),
    amount: Yup.number().required().positive().label("amount"),
  });

  const handleSubmit = async (values: any) => {
    const body = new URLSearchParams(values).toString();
    const response = await fetch(`http://127.0.0.1:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    }).then((res) => res.json());
    if (response?.partno == values.partno) {
      addProduct(values);
    }
  };

  const deleteProduct = (partno: any) => {
    setProductList((currList: Product[]) =>
      currList.filter((prod) => prod.partno != partno)
    );
  };

  const addProduct = (product: Product) => {
    setProductList((currList: Product[]) => {
      const newList = [...currList];
      newList.push(product);
      return newList;
    });
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
      <ProductTable products={productList} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Products;
