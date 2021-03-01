import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";

const FooterWrapper = styled.footer`
    width:100%;
    height:100px;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:1px solid ${themeGet('border.0')}
`;

export const FooterText = styled.p`
    color:${themeGet('text.1')};
    font-family:${themeGet('fonts.primary')}
`;
export default FooterWrapper;