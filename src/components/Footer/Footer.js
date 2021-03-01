
import FooterWrapper,{FooterText} from "./Footer.style";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>
                Splashy @{
                    new Date().getFullYear()
                }
            </FooterText>
        </FooterWrapper>
    )
};

export default Footer;