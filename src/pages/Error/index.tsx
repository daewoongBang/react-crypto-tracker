import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
};

export default ErrorPage;
