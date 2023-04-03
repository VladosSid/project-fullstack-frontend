import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const NavContainer = styled.div`
    display: flex;
    gap: 12px;

    @media ${theme.device.tablet} {
        gap: 18px;
    }
`

export const RegisterBtn = styled.a`
    clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
    // check paddings for different devices
    padding: 50px 42px;
    border: none;

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
`