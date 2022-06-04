interface IErrorProps {
  error: Error
}

const ErrorMessage = ({ error }: IErrorProps) => {
  return <div>{error.message}</div>
}

export default ErrorMessage
