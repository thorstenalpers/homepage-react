import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

export default () => {

    const toggle = () => {
        toggleOpenMenu(!isOpen);
    }

    const [isOpen, toggleOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">Thorsten Alpers</NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Über mich</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Kenntnisse">Kenntnisse</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Lebenslauf">Lebenslauf</NavLink>
                            </NavItem>
                            <NavItem>
                                <a className="text-dark nav-link" href="https://github.com/thorstenalpers" target="_blank" rel="noopener noreferrer">
                                    <img title="thorstenalpers - GitHub" src={'/images/github.png'} alt={"GitHub"} style={{ width: '40px' }} /></a>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}