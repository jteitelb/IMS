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
    <div className="mb-4 flex flex-col gap-2">
      <span className="flex w-1/3 justify-between">
        <label>{label}</label>
        <input
          className="border border-slate-400 rounded-md "
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
