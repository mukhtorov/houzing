import { useId } from 'react';

const useUniqueId = () => {
  const id = useId();
  return id;
};

export default useUniqueId;
