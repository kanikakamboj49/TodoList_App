import { useState } from "react";

function useFilterSort() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const handleSortEnter = () => {
    setShowSort(true);
  };

  const handleSortLeave = () => {
    setShowSort(false);
  };

  const handleFilterEnter = () => {
    setShowFilter(true);
  };

  const handleFilterLeave = () => {
    setShowFilter(false);
  };

  return {
    showFilter,
    showSort,
    setShowFilter,
    setShowSort,
    handleFilterEnter,
    handleFilterLeave,
    handleSortEnter,
    handleSortLeave,
  };
}

export default useFilterSort;
