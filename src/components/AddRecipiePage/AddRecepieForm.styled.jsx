import styled from 'styled-components';

export const FilePicker = styled.div`
    width: 357px;
    height: 344px;
    background-color: #8BAA36;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-image: url('./camera.svg'); 
`;

export const Form = styled.form`
    display: flex;
`;

export const InputFile = styled.input`
    display: none;
`;

export const InputText = styled.input`
    border: 1px solid #E0E0E0;
    border-width: 0px 0px 1px;
    height: 43px;
    margin-bottom: 40px;
    padding: 0;
    min-width: 261px;
    box-sizing: border-box;
`;

export const FieldList = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 393px;
        margin-left: 50px;
`;

export const SelectList = styled.select`
    border: 1px solid #E0E0E0;
    border-width: 0px 0px 1px;
    height: 43px;
    margin-bottom: 40px;
    width: 132px;
    box-sizing: border-box;
`;