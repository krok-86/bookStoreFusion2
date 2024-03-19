/* eslint-disable no-console */
import type { FC } from 'react';
import BannerStyled from './Banner.styled';
import { Button } from 'antd';
import { BUILD, BUY, CHOOSE } from '../../../constants/constants';
import type { BannerType } from '../../../types/types';
import gsap from 'gsap';

const Banner: FC<BannerType> = ({ bookRef }) => {
  const scrollTo = (target: HTMLElement | null) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gsap.to(window, { duration: 1, scrollTo: target });
  };
  return (
    <BannerStyled>
      <div className="banners">
        <div className="banner-first">
          <img className="banner-transp" src="/images/books.svg" alt="" />
        </div>
        <div className="banner-text">
          <p className="title-build">{BUILD}</p>
          <p className="title-buy">{BUY}</p>
          <Button className="choose-button"
          onClick = {() => scrollTo(bookRef?.current)}
          >{CHOOSE}
          </Button>
        </div>
        <img className="banner-woman" src="/images/banner.png" alt="" />
      </div>
    </BannerStyled>
  );
};

export default Banner;
