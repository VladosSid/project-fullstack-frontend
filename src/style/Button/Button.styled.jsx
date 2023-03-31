import styled from 'styled-components';

export const Box = styled.div`
  padding: ${props => props.theme[props.value].box.padding};

  background: ${props => props.theme[props.value].box.background};

  clip-path: ${props => props.theme[props.value].box.clipPath};

  &:hover {
    background: ${props => props.theme[props.value].box.hoverBackground};
  }

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ButtonCustom = styled.button`
font-family: 'Poppins';

  padding: ${props => props.theme[props.value].padding};

  color: ${props => props.theme[props.value].color};
  background: ${props => props.theme[props.value].background};

  clip-path: ${props => props.theme[props.value].clipPath};
  border: ${props => props.theme[props.value].border};
  border-radius: ${props => props.theme[props.value].borderRadius};

  font-size: ${props => props.theme[props.value].fontSize};
  line-height: ${props => props.theme[props.value].lineHeight};

  cursor: pointer;

  &:hover,
  ${Box}:hover & {
    color: ${props => props.theme[props.value].hoverColor};
    background: ${props => props.theme[props.value].hoverBackground};
    border-color: ${props => props.theme[props.value].hoverBorderColor};

  transition: 
    background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
