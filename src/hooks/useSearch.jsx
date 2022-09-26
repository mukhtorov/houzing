import { useLocation } from 'react-router-dom';

export const useSearch = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

export default useSearch;
