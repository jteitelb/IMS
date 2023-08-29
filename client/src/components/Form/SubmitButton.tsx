import { useFormikContext } from "formik";
// import Button from "../Button";
import { Button } from "antd";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton = ({ title }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      onClick={handleSubmit}
      type="secondary"
      className="text-white border bg-slate-800 border-slate-800 hover:bg-inherit hover:text-slate-800"
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
