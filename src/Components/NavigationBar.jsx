import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Features from './Features';
import Testimonial from './Testimonial';
import Pricing from './Pricing';

const NavigationBar = () => {
  const componentRef = useRef(null);

  const focusComponent = () => {
    componentRef.current.focus();
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-Transparent rounded" aria-label="Thirteenth navbar example">
      <div className="container-fluid ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a className="navbar-brand col-lg-3 me-0" href="#">TinDog</a>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/TinDog">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LoginSignUp">Login</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/TinDog">Pricng</a></li>
                <li><a className="dropdown-item" href="/TinDog">Testimonial</a></li>
                <li><a className="dropdown-item" href="/TinDog">Features</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavigationBar