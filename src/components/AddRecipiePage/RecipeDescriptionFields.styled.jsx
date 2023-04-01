import styled from 'styled-components';
import img from '../../images/AddRecipiePage/camera.svg';
import theme from 'style/generalStyle';


export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Desc = styled.div`
display: flex;
flex-direction: column;

@media ${theme.device.desktop} {
    display: flex;
    flex-direction: row;
  }

`;



export const FilePicker = styled.div`
  height: 268px;
  background-color: #8baa36;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 32px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media ${theme.device.desktop} {
    width: 357px;
    height: 344px;
    margin: 0
  }
`;

export const Row = styled.p`
  display: flex;
  flex-direction: row;
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputText = styled.input`
  border: 1px solid #e0e0e0;
  border-width: 0px 0px 1px;
  height: 43px;
  margin-bottom: 40px;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
`;

export const FieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 393px;
  @media ${theme.device.desktop} {
    margin-left: 50px;
    width: 393px;
  }
`;

export const SelectList = styled.select`
  border: 1px solid #e0e0e0;
  border-width: 0px 0px 1px;
  height: 43px;
  margin-bottom: 40px;
  width: 132px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
   {
    :focus-visible {
      outline: none;
    }
  }
`;
