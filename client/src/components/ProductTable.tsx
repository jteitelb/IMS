import { Product } from "../pages/Products";

function ProductTable({
  products,
  deleteProduct,
}: {
  products: Product[];
  deleteProduct: any;
}) {
  return (
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
        {products.map(({ partno, item, uom, amount }: Product) => {
          return (
            <tr key={partno} className="even:bg-slate-200 odd:bg-white">
              <td>{partno}</td>
              <td>{item}</td>
              <td>{uom}</td>
              <td>{amount}</td>
              <td className="m">
                <div
                  className="bg-slate-500 w-8 text-center font-bold text-neutral-800 rounded-4 border-2 border-slate-600 cursor-pointer"
                  onClick={() => {
                    deleteProduct(partno);
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
  );
}

export default ProductTable;
