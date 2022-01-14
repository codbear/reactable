import React, { useContext } from 'react';
import styled from 'styled-components';

import ChevronLeftIcon from '../../icons/ChevronLeftIcon';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import FirstPageIcon from '../../icons/FirstPageIcon';
import LastPageIcon from '../../icons/LastPageIcon';
import IconButton from '../IconButton';
import { TableContext } from '../../contexts';

const StyledPaginator = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const DisplayableNumberOfRowsSelector = styled.div`
  display: flex;
  margin-right: 24px;

  & #rowsPerPageLabel {
    margin-right: 16px;
  }
`;

const Position = styled.p`
  margin-right: 24px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationButton = styled(IconButton)`
  margin-right: 8px;
`;

const Paginator = () => {
  const {
    pagination: {
      numberOfItems,
      currentPage,
      numberOfPages,
      goToNextPage,
      goToPreviousPage,
      goToLastPage,
      goToFirstPage,
      pageFirstRowIndex,
      pageLastRowIndex,
    },
    onChangeItemsPerPage,
    itemsPerPageOptions,
  } = useContext(TableContext);

  const previousPageNumber = currentPage - 1;
  const nextPageNumber = currentPage + 1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;

  const firstDisplayedRowNumber = pageFirstRowIndex + 1;
  const lastDisplayedRowNumber = isLastPage ? numberOfItems : pageLastRowIndex;

  return (
    <StyledPaginator>
      <DisplayableNumberOfRowsSelector>
        <p id="rowsPerPageLabel">Rows per page</p>

        <select
          name="rowsPerPage"
          id="rowsPerPageSelect"
          aria-labelledby="rowsPerPageLabel"
          onChange={(event) => onChangeItemsPerPage(event.target.value)}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </DisplayableNumberOfRowsSelector>

      <Position>
        {firstDisplayedRowNumber} - {lastDisplayedRowNumber} of {numberOfItems}
      </Position>

      <Navigation>
        <NavigationButton
          onClick={goToFirstPage}
          aria-label="Go to first page"
          disabled={isFirstPage}
          Icon={FirstPageIcon}
        />

        <NavigationButton
          onClick={goToPreviousPage}
          aria-label={`Go to page ${previousPageNumber}`}
          disabled={isFirstPage}
          Icon={ChevronLeftIcon}
        />

        <NavigationButton
          onClick={goToNextPage}
          aria-label={`Go to page ${nextPageNumber}`}
          disabled={isLastPage}
          Icon={ChevronRightIcon}
        />

        <NavigationButton
          onClick={goToLastPage}
          aria-label="Go to last page"
          disabled={isLastPage}
          Icon={LastPageIcon}
        />
      </Navigation>
    </StyledPaginator>
  );
};

export default Paginator;
