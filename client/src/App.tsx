import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
