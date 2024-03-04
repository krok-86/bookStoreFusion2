import styled from "styled-components";

const DescriptionBookStyled = styled.div`
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .star-block {
    display: flex;
    flex-direction: column;
  }
  .star-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 20px;
  }
  .book-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 48px 15px 20px;
  }
  .book-pic-wrapper {
    width: 132px;
    height: 202px;
    padding-right: 20px;
  }
  .book-pic {
    border-radius: 16px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .book-name {
    font-size: 18px;
    font-weight: 700;
    width: 135px;
  }
  .book-author {
    font-size: 12px;
    font-weight: 500;
    margin: 14px auto 21px auto;
  }
  .rate {
    font-size: 20px;
    font-weight: 500;
    color: #bfcc94;
    padding-bottom: 9px;
    width: 135px;
  }
  .rate-pic {
    width: 20px;
    height: 20px;
  }
  .rate-number {
    color: #b9bac3;
    font-size: 15px;
    font-weight: 500;
    padding-left: 8px;
    padding-top: 5px;
  }
  .rate-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #b9bac3;
    font-size: 12px;
  }
  .description {
    font-size: 14px;
    font-weight: 500;
    padding: 15px 15px 30px;
  }
  .description-text {
    padding: 0px 15px 30px;
    color: #344966;
    font-size: 12px;
    font-weight: 500;
  }
  .price-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 290px;
  }
  .price-cover {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .cover {
    color: #344966;
    font-size: 14px;
    font-weight: 500;
  }
  .price {
    display: flex;
    width: 135px;
    height: 38px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background: #344966;
    color: white;
    margin: 17px auto 50px auto;
  }
  .recommend {
    font-size: 18px;
    font-weight: 700;
    padding-left: 15px;
  }
  .books-block {
    min-width: 289px;
    width: 100%;
    gap: 30px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    padding-left: 15px;
    height: 333px;
    overflow-y: hidden;
  }
  .recommend {
    padding-bottom: 30px;
  }
  @media (min-width: 834px) {
    width: 100%;
    margin: 0 auto;
    .book-pic-wrapper {
    width: 391px;
    height: 584px;
  }
  .book-name {
    font-size: 32px;
    width: 392px;
  }
  .book-wrap {
    justify-content: flex-start;
  }
  .book-author {
    font-size: 20px;
  }
  .rate-title{
    font-size: 16px;
    padding-bottom: 9px;
  }
  .rate-this-book {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .arrow_2 {
width: 30px;
height: 20px;
padding-bottom: 23px;
padding-left: 40px;
padding-right: 10px;
}
.arrow_2 div {
position: relative;
top: 20px;
width: 17.73px;
height: 3px;
background-color: #b9bac3;
box-shadow: 0 3px 5px rgb(0 0 0 / 20%);
left: 0;
display: block;
}
.arrow_2 div::before {
content: '';
position: absolute;
width: 10px;
height: 3px;
top: 4px;
right: 8px;
background-color: #b9bac3;
box-shadow: 0 3px 5px rgb(0 0 0 / 20%);
transform: rotate(226deg);
}
.arrow_2 div::after {
content: '';
position: absolute;
width: 10px;
height: 3px;
top: -3px;
right: 9px;
background-color: #b9bac3;
transform: rotate(315deg);
}
:after, :before {
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin: 0 auto;
    .books-block {
      min-width: 1280px;
    width: 100%;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow-y: hidden;
    height: 333px;
  }
  }
`;
export default DescriptionBookStyled;
