
export const handleShowMore = (e, data) => {
  setShowMore(true);
  setTimeout(() => {
    setShowMore(false);
    if (data.length === slice) {
      setSlice(data.length);
      setEmpty(true);
    } else {
      setSlice(slice + 5);
    }
  }, 1000);
  return;
};
