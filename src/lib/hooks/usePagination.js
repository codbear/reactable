import { useEffect, useState } from 'react';

const usePagination = ({ itemsPerPage, numberOfItems }) => {
  const [currentPage, goToPage] = useState(0);

  const numberOfFullPages = Math.trunc(numberOfItems / itemsPerPage);
  const hasPartialLastPage = Boolean(numberOfItems % itemsPerPage);
  const numberOfPages = hasPartialLastPage ? numberOfFullPages + 1 : numberOfFullPages;

  const pageFirstRowIndex = (currentPage - 1) * itemsPerPage;
  const pageLastRowIndex = pageFirstRowIndex + itemsPerPage;

  const goToPreviousPage = () => {
    const isFirstPage = currentPage <= 1;

    if (isFirstPage) {
      return;
    }

    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    const isLastPage = currentPage >= numberOfPages;

    if (isLastPage) {
      return;
    }

    goToPage(currentPage + 1);
  };

  const goToLastPage = () => {
    goToPage(numberOfPages);
  };

  const goToFirstPage = () => {
    goToPage(1);
  };

  useEffect(() => {
    if (currentPage > numberOfPages) {
      goToPage(numberOfPages);
    }
  }, [currentPage, numberOfPages]);

  useEffect(() => {
    if (currentPage < 1) {
      goToFirstPage();
    }
  }, [currentPage]);

  return {
    currentPage,
    numberOfPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    goToLastPage,
    goToFirstPage,
    pageFirstRowIndex,
    pageLastRowIndex,
  };
};

export default usePagination;
