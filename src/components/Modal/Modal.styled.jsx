import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  transform: translateY(-130vh);
      
   ${props => props.isOpenVlados && 'transform: translateY(0)'};
  }
`;

export const ModalEl = styled.div`
  width: 500px;
  height: 500px;
  background: red;
`;
