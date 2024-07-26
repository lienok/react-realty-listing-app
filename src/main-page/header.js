import 'bootstrap/dist/css/bootstrap-grid.min.css';

import logo from './GloboLogo.png';
import {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header className='row'>
                <div className='col-md-5'><img src={logo} className='logo' alt='logo'/></div>
                <div className='col-md-7 mt-5 subtitle'>{this.props.subtitle}</div>
            </header>
        );
    }
}
export default Header;