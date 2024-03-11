import type { RefObject } from 'react';
import { useEffect } from 'react';

type ArgsType = {
    ref: RefObject<HTMLDivElement>;
    callback: ()=> void;
};

const useClickOutside = ({ ref, callback }:ArgsType) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(<Node>(e!.target))) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useClickOutside;
