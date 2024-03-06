import styled from "styled-components";

type SortStyledType = {
    isOpened: boolean,
}

const SortStyled = styled.div<SortStyledType>`
 .sort-genre {
    position: relative;
    background-color: ${(props) => props.theme.backgroundColorStepper};
    border-radius: 16px;
    color: ${(props) => props.theme.colorTextTitle};
    width: 290px;
    height: 48px;
}

.sort-genre-group {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 11px 0 17px;
    box-sizing: border-box;
    cursor: pointer;
}

.sort-genre-wrap {
    position: absolute;
    width: 290px;
    top: 74px;
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

.sort-genre-wrap:after {
    content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent ${(props) => props.theme.backgroundColorStepper} transparent;
      top: -24px;
      left: 15px;
}
img {
    cursor: pointer;
}
.sort-genre-option {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
}

.sort-genre-option__icon{
    transform: rotate(${(props) => props.isOpened && '90deg' });
    width: 24px;
    height: 24px;    
}

.sort-genre-title, .sort-genre-option__title {
    font-size: 14px;
}

@media (min-width: 630px) {
    .sort-genre-wrap:after {
        top: -18px;
    }
}

@media (min-width: 834px) {
    .sort-genre {
        width: 255px;
    }
    .sort-genre-wrap {
        width: 305px;
    }
    .sort-genre-title, .sort-genre-option__title {
        font-size: 16px;
    }
}

@media (min-width: 1440px) {
    .sort-genre {
        width: 196px;
    }
}

`
export default SortStyled;