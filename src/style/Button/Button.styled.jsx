import styled from 'styled-components';

export const Box = styled.div`
  padding: ${props => props.theme[props.value].box.padding};

  color: ${props => props.theme[props.value].box.color};
  background: ${props => props.theme[props.value].box.background};

  clip-path: ${props => props.theme[props.value].box.clipPath};

  &:hover {
    background: ${props => props.theme[props.value].box.hover};
  }

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ButtonCustom = styled.button`
  padding: ${props => props.theme[props.value].padding};

  color: ${props => props.theme[props.value].color};
  background: ${props => props.theme[props.value].background};

  clip-path: ${props => props.theme[props.value].clipPath};
  border: ${props => props.theme[props.value].border};

  font-size: ${props => props.theme[props.value].fontSize};
  line-height: ${props => props.theme[props.value].lineHeight};

  cursor: pointer;

  &:hover,
  ${Box}:hover & {
    background: ${props => props.theme[props.value].hover};
  }

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
