import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import SortPriceStyled from './SortPrice.styled';
import { Slider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import useClickOutside from '../../../../utils/useClickOutside';

const SortPrice:FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState<number[]>([100, 1100]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const priceStr = searchParams.get('price');
    const priceArr = priceStr?.split('-').map((item) => Number(item));
    setValue(priceArr || [100, 1100]);
  }, [searchParams]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const paramsStr = (value as number[]).join('-');
      setSearchParams((searchParams) => {
        searchParams.set('price', paramsStr);
        return searchParams;
      });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [setSearchParams, value]);

  useClickOutside({ ref, callback: () => setIsOpened(false) });

  return (
  <SortPriceStyled ref={ref} isOpened={isOpened}>
    <div className="sort-price">
      <div className="sort-price-group" onClick={() => setIsOpened(!isOpened)}>
        <p className="sort-price-title">Price</p>
        <div className="sort-price-option__icon">
          <img src="images/forward_blue.svg" />
        </div>
      </div>
      { isOpened &&
      (<div className="sort-price-slider-wrap">
          <Slider
            value={value}
            onChange={handleChange}
            step={10}
            min={100}
            max={1100}
          />
          <div className="sort-price-labels">
            <p>$ {value[0]},00</p>
            <p>$ {value[1]},00</p>
          </div>
       </div>)
      }
    </div>
  </SortPriceStyled>
  );
};

export default SortPrice;
