import { Product } from "./pages/Products";

const API_URL = "http://127.0.0.1:3000";

const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

const addProduct = async (product: Product) => {
  const body = JSON.stringify(product);
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  return response.json();
};

const deleteProduct = async (partno: string) => {
  const response = await fetch(`${API_URL}/products/${partno}`, {
    method: "DELETE",
  });
  return response.json();
};

export { getProducts, addProduct, deleteProduct };
