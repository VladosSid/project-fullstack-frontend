import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const NavContainer = styled.div`
    display: flex;
    gap: 12px;

    @media ${theme.device.tablet} {
        gap: 18px;
    }
`

export const RegisterBtn = styled.button`
    /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
    padding: 12px 24px;
    border-radius: 24px 44px;
    border: 2px solid transparent;
    cursor: pointer;

    background-color: #8BAA36;
    color: #FAFAFA;
    /* add transition? */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    &:hover,
    &:focus {
        background-color: #22252A; 
    }

    @media ${theme.device.tablet} {
        padding: 22px 44px;
    }
`

export const SigninBtn = styled.button`
    /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
    padding: 12px 24px;
    border-radius: 24px 44px;
    border: 2px solid #FAFAFA;
    cursor: pointer;    

    background-color: transparent;
    color: #FAFAFA;
    /* add transition? */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    &:hover,
    &:focus {
        background-color: #ECECEC; 
        border: 2px solid #8BAA36;
        color: #8BAA36;
    }

    @media ${theme.device.tablet} {
        padding: 22px 44px;
    }
`