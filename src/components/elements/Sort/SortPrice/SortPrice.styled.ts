import styled from 'styled-components';

type SortPriceStyledType = {
    isOpened: boolean;
};

const SortPriceStyled = styled.div<SortPriceStyledType>`
.sort-price-slider-wrap {
    position: absolute;
    width: 290px;
    height: 151px;
    top: 74px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    z-index: 1;
    padding: 40px 17px;
    box-sizing: border-box;
    border-radius: 16px;
}

.sort-price {
    position: relative;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    border-radius: 16px;
    color: ${(props) => props.theme.colorTextTitle};
    width: 290px;
    height: 48px;
    box-sizing: border-box;
}

.sort-price-group {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 11px 0 17px;
    box-sizing: border-box;
    cursor: pointer;
}

.sort-price-labels{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.sort-price-option__icon{
    transform: rotate(${(props) => props.isOpened && '90deg'});
    width: 24px;
    height: 24px;
}

.sort-price-slider-wrap:after {
    content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent ${(props) => props.theme.backgroundColorStepper} transparent;
      top: -18px;
      left: 15px;
}

.MuiSlider-rail {
    background-color: #D6D8E7;
    border-color: #D6D8E7;
    height: 12px;
    
}

.MuiSlider-track {
    background-color: #BFCC94;
    border-color: #BFCC94;
    height: 12px;
}
.MuiSlider-thumb {
    background-color: ${(props) => props.theme.colorTextButton};
    border: 2px solid #BFCC94;
    width: 32px;
    height: 32px;
}

.sort-price-title {
    font-size: 14px;
}
.MuiSlider-root {
width: 96%;
}
@media (min-width: 834px) {
    .sort-price-slider-wrap {
        width: 410px;
    }
    .sort-price-title {
        font-size: 16px;
    }
    .sort-price {
        width: 255px;
    }
}

@media (min-width: 1280px) {
    .sort-price {
        width: 196px;
    }
}

`;
export default SortPriceStyled;
