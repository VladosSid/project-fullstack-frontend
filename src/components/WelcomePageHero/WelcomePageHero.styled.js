import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const HeroContainer = styled.div`
    text-align: center;
`

export const WelcomeLogo = styled.div`
  display: inline-block;
  margin-bottom: 28px;

  width: 54px;
  height: 54px;

  @media ${theme.device.tablet} {
    margin-bottom: 44px;

    width: 68px;
    height: 68px;
  }
`;

export const WelcomeTitle = styled.h1`
    margin-bottom: 14px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;

    color: #FAFAFA;

    @media ${theme.device.tablet} {
        font-size: 28px;
    }
`