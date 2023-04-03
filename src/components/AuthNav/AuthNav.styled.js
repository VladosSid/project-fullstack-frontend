import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const NavContainer = styled.div`
    display: flex;
    gap: 12px;

    @media ${theme.device.tablet} {
        gap: 18px;
    }
`