import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";

const PhotoWrapper = styled.section`
    width:100%;
    min-height:78vh;
    display:flex;
    flex-grow:1;
    font-family:${themeGet('fonts.primary')};
    padding:20px;
`;

export default PhotoWrapper;