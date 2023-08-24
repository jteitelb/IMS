const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <p>{error}</p>;
};

export default ErrorMessage;
