import { useFormikContext } from "formik";
import Button from "../Button";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton = ({ title }: SubmitButtonProps) => {
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
