export interface FormErrorsProps {
  error?: {
    type: string;
    message: string;
  };
}

export const FormErrors = ({ error }: FormErrorsProps) => {
  if (!error) {
    return null;
  }

  return (
    <p role="alert" className="text-red-600">
      {error.message}
    </p>
  );
};
