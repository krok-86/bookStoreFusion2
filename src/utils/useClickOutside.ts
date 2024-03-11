import type { RefObject } from 'react';
import { useEffect } from 'react';

type IArgs = {
    ref: RefObject<HTMLDivElement>;
    callback: ()=> void;
};

const useClickOutside = ({ ref, callback }:IArgs) => {
  const handleClick = (e:any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useClickOutside;
