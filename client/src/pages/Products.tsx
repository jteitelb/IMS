import * as Yup from "yup";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import SubmitButton from "../components/Form/SubmitButton";
import ProductTable from "../components/ProductTable";
import { useState, useEffect } from "react";
import { getProducts, addProduct, deleteProduct } from "../API";

export interface Product {
  partno: string;
  item: string;
  uom: string;
  amount: string;
}

const Products = () => {
  const [productList, setProductList]: any = useState([]);

  const updateProducts = async () => {
    try {
      const products = await getProducts();
      setProductList(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateProducts();
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

  return (
    <div className="w-full h-full p-2">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (product: Product) => {
          try {
            await addProduct(product);
            updateProducts();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <FormField label="Part No" name="partno" type="text" />
        <FormField label="Item" name="item" type="text" />
        <FormField label="UOM" name="uom" type="text" />
        <FormField label="Amount" name="amount" type="number" />
        <SubmitButton title="Add" />
      </Form>

      <h2 className="mt-5 text-lg font-bold">Current Items</h2>
      <ProductTable
        products={productList}
        deleteProduct={async (partno: string) => {
          try {
            await deleteProduct(partno);
            updateProducts();
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </div>
  );
};

export default Products;
