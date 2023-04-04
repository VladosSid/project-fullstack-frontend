import styled from 'styled-components';
//------------------------
export const SearchesForm = styled.form`
  display: flex;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => (props.marginBottom ? '24px' : 0)};
`;

export const SearchInput = styled.input`
  background-color: #fafafa;
  border: none;
  outline: none;
  /* Secondary/Secondary1 */
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  height: 52px;
  width: 295px;
  padding-left: 17px;
  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #bdbdbd;
  }
  /* ::placeholder {
    font: inherit;
    font-size: 18px;
  } */
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 113px;
  height: 52px;
  /* left: 221px;
  top: 642px; */

  /* background: #22252a; */

  /* identical to box height */
  /* background-color: #22252a; !!!!!*/

  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  background-color: ${props => (props.green ? '#8BAA36' : '#22252a')};
`;
