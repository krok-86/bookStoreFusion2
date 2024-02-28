import styled from "styled-components";

const DescriptionBookStyled = styled.div`
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
    /* border-radius: 16px; */
    /* position: relative; */
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
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #bfcc94;
    padding-bottom: 9px;
  }
  .rate-number {
    color: #b9bac3;
    font-size: 20px;
    font-weight: 500;
  }
  .rate-title {
    color: #b9bac3;
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
    margin: 0 auto 50px auto;
  }
 .recommend{
font-size: 18px;
font-weight: 700;
padding-left: 15px;
 }
 .books-block {
    width: 100%;
    gap: 30px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 15px;
  }
`
export default DescriptionBookStyled;