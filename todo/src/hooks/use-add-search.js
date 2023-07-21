import { useState } from "react";

function useAddSearch() {
  const [additem, setAddItem] = useState(false);
  const [searchitem, setSearchItem] = useState(false);

  const handleAddItemClick = () => {
    if (searchitem === true) {
      setSearchItem(false);
    }
    setAddItem(!additem);
  };

  const handleSearchItemClick = () => {
    if (additem === true) {
      setAddItem(false);
    }
    setSearchItem(!searchitem);
  };

  return {
    additem,
    searchitem,
    handleAddItemClick,
    handleSearchItemClick,
  };
}

export default useAddSearch;
