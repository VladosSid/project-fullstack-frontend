import styled from 'styled-components';
// import theme from '../../style/generalStyle';

export const PreparationWrapper = styled.div`
  margin-bottom: 100px;
  @media ${theme.device.tablet} {
    margin-bottom: 200px;
  }
  @media ${theme.device.desktop} {
    display: flex;
    gap: 107px;
  }
`;

export const InstructionWrapper = styled.div`
  margin-bottom: 40px;
  @media ${theme.device.tablet} {
    margin-bottom: 53px;
  }
  @media ${theme.device.desktop} {
    width: 469px;
    margin-bottom: 0;
  }
`;

export const InstructionTitle = styled.title`
  display: block;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #3e4462;
  @media ${theme.device.tablet} {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

export const InstructionList = styled.ul``;

export const InstructionText = styled.li``;

export const ImageWrapper = styled.div``;
