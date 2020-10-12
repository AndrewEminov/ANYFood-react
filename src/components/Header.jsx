import React from 'react';
import {Link} from "react-router-dom";
function Header(props) {

    return (
        <header className={'header'}>
            <Link to={'/'}><img src="" alt=""/></Link>
            <ul className={'currency'}>
                <li key={1} className={'item'}>USD|</li>
                <li key={2} className={'item'}>EUR|</li>
                <li key={3} className={'item'}>RUB|</li>
                <li key={4} className={'item'}>UAH</li>
            </ul>
        </header>
    )
}


export default Header;
