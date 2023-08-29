import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const FormField = ({
  name,
  noSpace = false,
  noDec = false,
  label,
  type,
  ...props
}) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <div className="flex flex-col gap-2 mb-4">
      <span className="flex justify-between w-1/3">
        <label>{label}</label>
        <input
          className="border rounded-md border-slate-400 "
          type={type}
          onBlur={() => setFieldTouched(name)}
          onChange={(event) => {
            let text = event.target.value;
            if (noSpace) text = text.replace(/\s/g, "");
            if (noDec) text = text.replace(/\./g, "");
            setFieldValue(name, text);
          }}
          value={values[name]}
          {...props}
        />
      </span>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;
