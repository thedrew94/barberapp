import { useRouteError } from 'react-router-dom';

/**
 * The ErrorBoundary is triggered only under specific conditions related to routing errors or errors thrown during the rendering of a route’s component tree.
 */

function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error?.message || 'Unknown error'}</p>
    </div>
  );
}

export default ErrorBoundary;
