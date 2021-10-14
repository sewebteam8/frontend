import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">CC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/discuss">Discuss</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Find Your Buddy</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">Donate</a>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
