import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function NavBar() {
  return (
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyApp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">

        <form class="d-flex mx-auto search-ip align-items-centre">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
            <div className="serch-icon">
                <SearchIcon/>
            </div>
        </form>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              {/* <h2>Product</h2> */}
              <a className="nav-link fs-4 fw-bold" href="#"> Product </a>

              {/* <a className="nav-link active" aria-current="page" href="#">Product</a> */}
            </li>
            <li className="nav-item">
            {/* <h2>Categories</h2> */}
              <a className="nav-link fs-4 fw-bold" href="#"> Categories  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Person2Icon/> Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <ShoppingCartOutlinedIcon/> </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#"> <DarkModeOutlinedIcon/> </a>
            </li>
          </ul>

        
        </div>
      </div>
    </nav>
    </header>
  );
}
