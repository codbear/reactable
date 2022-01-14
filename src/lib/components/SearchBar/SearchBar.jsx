import { useContext, useState } from 'react';
import styled from 'styled-components';

import { TableContext } from '../../contexts';

const StyledSearchBar = styled.form`
  position: relative;
  margin: 32px 16px;
`;

const TextField = styled.input`
  position: relative;
  z-index: 1;
  height: 35px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: transparent;

  & + label {
    position: absolute;
    top: 10px;
    left: 3px;
    font-size: 16px;
    transition: all 0.2s ease-out;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.text};
    transition: all 0.2s ease-out;
  }

  &:focus + label,
  &.hasValue + label {
    top: -15px;
    font-size: 12px;
  }
`;

const SearchBar = () => {
  const { onSearch } = useContext(TableContext);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    onSearch(nextValue);
  };

  return (
    <StyledSearchBar>
      <TextField
        type="text"
        onChange={handleChange}
        value={value}
        className={value.length > 0 ? 'hasValue' : ''}
      />
      <label>Search</label>
    </StyledSearchBar>
  );
};

export default SearchBar;
