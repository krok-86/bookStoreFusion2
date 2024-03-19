import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import SortTitleStyled from './SortTitle.styled';
import { useSearchParams } from 'react-router-dom';
import useClickOutside from '../../../../utils/useClickOutside';

const options = ['price', 'name', 'author'];

const SortTitle: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState<string>(options[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortStr = searchParams.get('sort');
    if (sortStr && options.includes(sortStr)) {
      setSelectedSorting(sortStr);
    }
  }, [searchParams]);

  const onChange = (value: string) => {
    if (value === selectedSorting) return;
    setSelectedSorting(value);
    setSearchParams((searchParams) => {
      searchParams.set('sort', value);
      searchParams.set('page', '1');
      return searchParams;
    });
  };

  useClickOutside({ ref, callback: () => setIsOpened(false) });

  return (
    <SortTitleStyled ref={ref} isOpened={isOpened}>
      <div className="sort-by">
        <div className="sort-by-group" onClick={() => setIsOpened(!isOpened)}>
          <p className="sort-by-title">Sort by {selectedSorting}</p>
          <div className="sort-by-option__icon">
            <img src="images/forward_dark.svg" alt="" />
          </div>
        </div>
        {isOpened && (
          <div className="sort-by-wrap">
            {options.map((item) => (
              <div className="sort-by-option" key={item}>
                <div
                  className={`sort-by-option-title ${
                    item === selectedSorting && 'sort-by-option-title__selcted'
                  }`}
                  onClick={() => onChange(item)}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SortTitleStyled>
  );
};
export default SortTitle;
