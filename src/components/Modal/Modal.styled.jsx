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
  ${props =>
    props.open === true
      ? 'transform: translateY(0)'
      : 'transform: translateY(-130vh)'};
`;
