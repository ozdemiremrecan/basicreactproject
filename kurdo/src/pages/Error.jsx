import { useRouteError,Link } from 'react-router-dom';

import PageContent from '../components/PageContent';

function ErrorPage() {
  const error = useRouteError();
    console.log(error)
  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <div class="d-flex align-items-center justify-content-center vh-100" style={{backgroundColor:"#192c42"}}>
            <div class="text-center">
                <h1 class="display-1 fw-bold">{error.status}</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    {error.data.message}
                  </p>
                <Link to="/" class="btn btn-primary text-light">Go Home</Link>
            </div>
        </div>
    </>
  );
}

export default ErrorPage;
