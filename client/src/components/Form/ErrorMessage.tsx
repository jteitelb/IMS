interface ErrorMessageProps {
  error: string;
  visible: boolean;
}

const ErrorMessage = ({ error, visible }: ErrorMessageProps) => {
  if (!visible || !error) return null;
  return <p>{error}</p>;
};

export default ErrorMessage;
