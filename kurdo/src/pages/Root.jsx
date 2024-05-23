import { Outlet, useLocation} from 'react-router-dom';
import "./Root.css"
import Navigation from '../components/Navigation';
function Root() {
  const location=useLocation();
  return (
    <>
    <Navigation/>
    </>
  );
}

export default Root;
