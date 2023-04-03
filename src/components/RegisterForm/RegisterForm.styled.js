import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Container = styled.div`
    z-index: 3;
`

export const Form = styled.form`
    border-radius: 30px;
    padding: 32px 28px 40px 28px;

    background-color: #2A2C36;
`

export const FormTitle = styled.h2`
    margin-bottom: 18px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;

    color: #FAFAFA;

    @media ${theme.device.tablet} {

    }

    @media ${theme.device.desktop} {

    }
`

export const Input = styled.input`
    padding: 12px 14px;
    border: 1px solid #FAFAFA;
    border-radius: 6px;

    background-color: transparent;

    &::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: -0.02em;

        color: #FAFAFA;
        opacity: 0.8;
    }
`