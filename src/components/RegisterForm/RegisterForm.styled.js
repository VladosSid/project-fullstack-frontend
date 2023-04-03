import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Container = styled.div`
    z-index: 3;

    text-align: center;
`

export const Form = styled.form`
    border-radius: 30px;
    padding: 32px 28px 40px 28px;
    margin-bottom: 18px;

    background-color: #2A2C36;
`

export const FormTitle = styled.h2`
    margin-bottom: 18px;

    text-align: left;
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

export const ListItem = styled.li`
    position: relative;
    margin-bottom: 12px;

    &:last-of-type {
        margin-bottom: 28px;
    }
`

export const Label = styled.label`
    

    svg {
        position: absolute;
        top: 12px;
        left: 14px;

        width: 18px;
        height: 18px;

        stroke: #FAFAFA;
        opacity: 0.8;
    }
`

export const Input = styled.input`
    padding: 12px 14px 12px 40px;
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

export const Button = styled.button`
    padding: 12px 0;
    width: 100%;
    border-radius: 6px;
    border: none;

    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.12;

    background-color: #8BAA36;
    color: #FAFAFA;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #22252A;
    }
`

export const Redirect = styled.span`
    text-decoration: underline;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;

    color: #FAFAFA;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #8BAA36;
        text-decoration: none;
    }
`