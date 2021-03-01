import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";

const NavbarWrapper = styled.div`
    width:100%;
    margin:0px;
    font-family:${themeGet('fonts.primary')}
`;

export default NavbarWrapper;