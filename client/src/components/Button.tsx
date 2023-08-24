const Button = ({ title, className, type, ...props }) => {
  return (
    <button
      className={`${className} py-2 px-6 rounded-md`}
      type={type}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
