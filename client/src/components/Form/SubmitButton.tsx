import { useFormikContext } from "formik";
import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      title={title}
      type="submit"
      onClick={handleSubmit}
      className="bg-slate-800 text-white"
    />
  );
};

export default SubmitButton;
