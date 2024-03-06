import styled from "styled-components";

type SortTitleStyledType = {
    isOpened: boolean,
}

const SortTitleStyled = styled.div<SortTitleStyledType>`
 .sort-by {
    position: relative;
    color: ${(props) => props.theme.colorText};
    width: 290px;
    height: 48px;
    padding: 0 15px 0 17px;
    box-sizing: border-box;
}

.sort-by-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 48px;
}

.sort-by-title {
    font-size: 18px;
}

.sort-by-wrap {
    position: absolute;
    width: 290px;
    top: 48px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    color: ${(props) => props.theme.colorTextTitle};
    z-index: 1;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.sort-by-option-title {
    color: ${(props) => props.theme.prefixInputColor};
    text-transform: capitalize;
    cursor: pointer;
}

.sort-by-option-title__selcted {
    color: ${(props) => props.theme.colorTextInput};
}

.sort-by-option__icon{
    transform: rotate(${(props) => !props.isOpened && '-90deg' });
}

.sort-by-wrap:after {
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

.sort-by-title {
    font-size: 14px;
}

@media (min-width: 834px) {
    .sort-by {
        width: 255px;
        padding: 0 13px 0 17px;
    }
    .sort-by-title {
        font-size: 16px;
    }
}

@media (min-width: 1280px) {
    .sort-by {
        width: 196px;
    }
    .sort-by-title {
        font-size: 16px;
    }
    .sort-by-wrap {
        width: 197px;
    }
}

`
export default SortTitleStyled;