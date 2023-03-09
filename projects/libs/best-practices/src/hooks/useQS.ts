import qs from "qs";

// Write/parse url

useEffect(() => {
  if (window.location.search) {
    //lh (as unknown as ...)
    const params = qs.parse(window.location.search.substring(1));

    const sort = sortList.find(
      (obj) => obj.sortProperty === params.sortProperty
    );

    dispatch(setFilter({ ...params, sort } as FilterSlice));

    isSearch.current = true;
  }
}, []);

useEffect(() => {
  // first render done
  if (isDone.current) {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currPage,
    });
    navigate(`?${queryString}`);
  }

  isDone.current = true;
}, [categoryId, sort, currPage]);