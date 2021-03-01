import {useState} from "react";
import {useRouter} from "next/router";

//third-party packages.
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

//components
import NavbarWrapper from "./Navbar.style";

const NavbarComponent = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const router = useRouter();

    const pathname = router.pathname;

    return (
        <NavbarWrapper>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Splashy</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>

                        <NavItem>
                            <NavLink href="/" active={
                                pathname === "/" || pathname.includes('photo') ||
                                pathname.includes('users')
                            }>
                                Photos
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
            <style jsx global>{`

            .navbar{
                padding:15px !important;
            }

            `}</style>
        </NavbarWrapper>
    )
};

export default NavbarComponent;