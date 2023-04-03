import styled from 'styled-components';
import theme from '../../style/generalStyle';
import { Tabs, Tab, Box } from '@mui/material';

export const StyledTabs = styled(Tabs)`
  && {
    border: '1px solid blue';
  }
`;

export const StyledTab = styled(Tab)`
  && {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #bdbdbd;
    text-transform: capitalize;
    padding: 0 22px;

    &:hover {
      color: #8baa36;
    },
    &:focus {
      color: #8baa36,
    },
    &:active {
      color:#8baa36,
    },
    & button.Mui-selected {
      color:#8baa36 !important,
    },    
  }
  
`;

export const StyledBox = styled(Box)`
  && {
    display: flex;
    gap: 14px;

    @media ${theme.device.mobail} {
      justify-content: center;
    }
  }
`;

export const DishCardContainer = styled.div`
  @media ${theme.device.tablet} {
    width: 336px;
    heigth: 323px;
  }
  //  ${theme.device.desktop}
  @media screen and (min-width: 1240px) {
    width: 300px;
    heigth: 323px;
  }
`;
