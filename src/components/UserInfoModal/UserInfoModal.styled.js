import styled from 'styled-components';

export const UserInfoModalBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px 24px;
  height: 50vh;

  overflow: hidden;
  position: fixed;

  z-index: 30;

  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 49px;

    background: #8baa36;
    border-radius: 6px;

    font-family: 'Poppins';
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #fafafa;
  }
`;

export const MediaInput = styled.input`
  position: absolute;
  top: 100px;
  right: 140px;
  height: 24px;
  width: 24px;
  border-radius: 50px;
`;

export const NameInput = styled.input`
  padding: 15px 15px 10px;

  width: 264px;
  border: 1px solid #bababc;
  border-radius: 6px;
  margin: auto;
  margin-bottom: 24px;
`;

export const GroupSvg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 50px;
  width: 88px;
  height: 88px;
  margin: 0 auto;
`;

export const CrossSvg = styled.img`
  position: absolute;
  top: 100px;
  right: 140px;
`;
