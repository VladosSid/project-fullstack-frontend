import styled from 'styled-components';
import ReactSelect from 'react-select';
// import Select from 'react-select';

export const CustomSelectBox = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchTypeSpan = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  letter-spacing: -0.24px;

  color: #001833;
  margin-right: 15px;
`;

export const CustomSelect = styled(ReactSelect)`
  .react-select__control {
    border: none;
    background-color: #ececec;
    height: 34px;
    width: 146px;
    border-radius: 6px;
    /* padding-left: 14px; */
    /* background-position: 95%; */
    font-size: 12px;
    line-height: 1.5;
    font-family: Poppins;
    color: #000000;
    /* gap: 8px; */
     {
      :active :hover,
      :focus {
        outline: 0;
        border: 0;
        box-shadow: none;
      }
    }
  }

  .css-t3ipsp-control:hover {
    outline: 0;
    border: 0;
    box-shadow: 0;
  }

  .css-t3ipsp-control {
    outline: 0;
    border: 0;
    box-shadow: none;
  }

  .react-select-container {
    outline: 0;
    border: 0;
    background-color: #ececec;
  }

  .react-select__control--is-focused {
    outline: 0;
    border: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }
  .react-select__dropdown-indicator {
    color: #8baa36;
  }
  .react-select__dropdown-indicator:hover,
  .react-select__dropdown-indicator:focus,
  .react-select__dropdown-indicator:active {
    color: #8baa36; //!important
  }
  .react-select__menu-list {
    max-height: 96px;
    width: 146px;
  }

  .react-select__menu:hover {
    outline: 0;
    border: 0;
  }

  .react-select__menu {
    outline: 0;
    border: 0;
    width: 146px;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  }

  .react-select__option {
    color: #000000;
    background-color: transparent;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spasing: -0.02em;
    font-family: Poppins;
  }

  .react-select__option:hover {
    color: #8baa36;
    background-color: transparent;
  }

  .react-select__option:hover {
    color: #8baa36;
    background-color: transparent;
  }
`;
//-------------------------
// export const customStyles = {
//   control: provided => ({
//     ...provided,
//     width: '146px',
//     gap: '8px',
//     backgroundColor: '#ECECEC',
//     fontSize: '12px',
//     lineHeight: '1.5',
//     fontFamily: 'Poppins',
//     color: '#000000',
//     borderRadius: 'none',
//     borderColor: 'transparent',
//     border: 'none',
//     outline: 'none',
//   }),
//   dropdownIndicator: provided => ({
//     ...provided,
//     color: '#000000',
//   }),
//   indicatorSeparator: provided => ({
//     ...provided,
//     display: 'none',
//   }),
//   option: (provided, state) => ({
//     ...provided,

//     backgroundColor: state.isSelected ? 'white' : 'white',
//     color: state.isSelected ? '#000000' : '#000000',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s ease-in-out',
//     '&:hover, &:active, &:focus ': {
//       backgroundColor: '#ECECEC',
//       color: '#000000',
//       outline: 'none',
//       border: '0px',
//       boxShadow: 'none',
//     },
//   }),
//   menu: provided => ({
//     ...provided,
//     width: '146px',
//     backgroundColor: 'white',
//     fontSize: '12px',
//     lineHeight: '1.5',
//     fontFamily: 'Poppins',
//     color: '#000000',
//     borderRadius: 'none',
//     marginTop: '4px',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//     border: 'none',
//   }),
//   menuList: provided => ({
//     ...provided,
//     padding: '0',
//   }),
// };

// export const StyledSelect = styled(Select)`
//   & .react-select__single-value {
//     color: #000000;
//   }
// `;
