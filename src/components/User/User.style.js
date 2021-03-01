import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";

const UserInfoWrapper = styled.div`
    width:100%;
    padding:10px;
    margin:20px 0px;
    font-family:${themeGet('fonts.primary')}
`;

export const UserPhotosWrapper = styled.div`
    width:100%;
    padding:10px;
    margin:10px 0px;
`;

export const UserPhotosHeading = styled.h3`
    margin-bottom:10px;
    font-family:${themeGet('fonts.primary')}
`;

export default UserInfoWrapper;