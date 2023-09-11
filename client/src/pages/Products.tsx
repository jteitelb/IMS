import * as Yup from "yup";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import SubmitButton from "../components/Form/SubmitButton";
import { useState, useEffect } from "react";

interface Product {
  partno: string;
  item: string;
  uom: string;
  amount: number;
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

  const handleSubmit = async (values: any) => {
    console.log(values);
    const body = new URLSearchParams(values).toString();
    const response = await fetch(`http://127.0.0.1:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    }).then((res) => res.json());
    if (response?.partno == values.partno) {
      setProductList((currList: Product[]) => {
        const newList = [...currList];
        newList.push(values);
        return newList;
      });
    }
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
            <th className="text-red-700">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(({ partno, item, uom, amount }: Product) => {
            return (
              <tr key={partno} className="even:bg-slate-200 odd:bg-white">
                <td>{partno}</td>
                <td>{item}</td>
                <td>{uom}</td>
                <td>{amount}</td>
                <td className="m">
                  <div
                    className="bg-slate-500 w-8 text-center font-bold text-neutral-800 rounded-4 border-2 border-slate-600 cursor-pointer"
                    onClick={async () => {
                      console.log(partno);
                      const response: any = await fetch(
                        `http://127.0.0.1:3000/products/${partno}`,
                        {
                          method: "DELETE",
                        }
                      ).then((res) => res.json());
                      console.log(response);
                      if (response?.deletedCount == "1") {
                        setProductList((currList: Product[]) =>
                          currList.filter((prod) => prod.partno != partno)
                        );
                      }
                      console.log(response);
                    }}
                  >
                    X
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
