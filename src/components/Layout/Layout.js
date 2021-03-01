import {Fragment} from 'react';

//components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar />
            {
                children
            }
            <Footer />
        </Fragment>
    )
};

export default Layout;