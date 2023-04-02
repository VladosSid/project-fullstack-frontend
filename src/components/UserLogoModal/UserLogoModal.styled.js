import styled from 'styled-components';

export const UserLogoPopup = styled.div`
  position: absolute;
  top: 70px;
  right: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px;

  background: #fafafa;
  overflow: hidden;
  border: 1px solid #8baa36;
  border-radius: 8px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  button:first-child {
    gap: 38px;
    margin-bottom: 28px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    line-height: 22px;

    color: #23262a;
  }
  button:last-child {
    gap: 6px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    line-height: 21px;

    color: #fafafa;
  }
`;
