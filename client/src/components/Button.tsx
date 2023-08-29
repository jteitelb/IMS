const Button = ({ title, className, type, ...props }: any) => {
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
