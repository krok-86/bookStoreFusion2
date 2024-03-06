import styled from "styled-components";

const DescriptionBookStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 15px;
  max-width: 1280px;
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
    padding: 48px 15px 20px;
  }
  .book-img-wrapper {
    width: 135px;
    height: 202px;
    padding-right: 20px;
    position: relative;
  }
  .book-pic {
    border-radius: 16px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .icon-wrap {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #344966;
    position: absolute;
    top: 30px;
    right: 50px;
    opacity: 0.8;
    cursor: pointer;
    border-radius: 50%;
}
  .icon-wrap:hover {
      opacity: 1;
  }
  .icon {
    color: white;
    font-size: 13px;
    position: absolute;
    top: 10;
    left: 10;
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
  .rate-this-book .rate {
    font-size: 20px;
    font-weight: 500;
    color: #bfcc94;
    padding-bottom: 9px;
    width: 135px;
  }
 .rate-this-book .rate-pic {
    width: 20px;
    height: 20px;
  }
  .rate-this-book .rate-number {
    color: #b9bac3;
    font-size: 15px;
    font-weight: 500;
    padding-left: 8px;
    padding-top: 5px;
  }
  .rate-this-book .rate-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #b9bac3;
    font-size: 12px;
  }
  .description {
    font-size: 14px;
    font-weight: 500;
    padding: 15px 15px 15px 0px;
  }
  .description-text {
    padding: 0px 0px 15px 0px;
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
    font-family: "Poppins", sans-serif;
  }
  .recommend {
    font-size: 18px;
    font-weight: 700;
    padding-left: 15px;
    padding-bottom: 30px;
  }
  .books-block {
    min-width: 289px;
    max-width: 1280px;
    width: 100%;
    gap: 30px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: hidden;
  }
  .book-data-wrapper {
    display: flex;
  }

  .description-block__desktop {
    display: none;
  }
  .description-block__mobile {
    display: block;
  }

  @media (min-width: 834px) {
    width: 100%;
    margin: 0 auto;
    .book-img-wrapper {
      width: 391px;
      height: 584px;
    }
    .icon-wrap {
    width: 38.68px;
    height: 38.68px;
    }
    .icon {
    font-size: 20px;
    }
    .book-name {
      font-size: 32px;
      width: 392px;
    }
    .book-wrap {
      justify-content: flex-start;
      display: flex;
      align-items: flex-start;
      padding: 48px 15px 20px;
    }
    .book-author {
      font-size: 20px;
    }
    .rate-title {
      font-size: 16px;
      padding-bottom: 9px;
    }
    .rate-this-book {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
    .description-text {
      min-height: 220px;
      font-size: 14px;
    }
    .book-description {
      margin-left: 0px;
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
      content: "";
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
      content: "";
      position: absolute;
      width: 10px;
      height: 3px;
      top: -3px;
      right: 9px;
      background-color: #b9bac3;
      transform: rotate(315deg);
    }
    :after,
    :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .recommend {
      font-size: 32px;
    }
    .books-block {
      min-width: 780px;
      width: 100%;
      gap: 30px 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .description-block__desktop {
      display: block;
    }
    .description-block__mobile {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin: 0 auto;

    .post-list {
      min-width: 1320px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
    .book-wrap {
      min-width: 1320px;
    }
    .arrow_2 {
      width: 30px;
      height: 30px;
      padding-bottom: 22px;
      padding-left: 0px;
      padding-right: 10px;
    }
    .rate-this-book {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 504px;
      padding-bottom: 30px;
    }
    .rate-title {
      width: 115px;
    }
    .rate {
      padding-bottom: 0;
      padding-right: 40px;
      width: 210px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
    }
    .rate-pic {
      width: 30px;
      height: 30px;
    }
    .description {
      padding: 0;
      font-size: 24px;
    }
    .description-text {
      padding: 0;
      font-size: 16px;
    }
    .cover {
      font-size: 16px;
    }
    .price {
      width: 216px;
      height: 50px;
      font-size: 20px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
    .price-cover {
      padding: 41px;
    }
    .post-save-button {
      width: 276px;
      height: 50px;
      font-size: 20px;
      font-family: "Poppins", sans-serif;
    }
    .star-block {
      display: flex;
      flex-direction: row;
    }
    .book-data {
      padding-left: 15px;
    }
    .books-block {
      min-width: 1280px;
      width: 100%;
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      overflow-y: hidden;
    }
    .recommend {
      font-size: 40px;
    }
    .book-name {
      font-size: 40px;
      width: 500px;
    }
    .book-author {
      font-size: 24px;
    }
    .star-wrap {
      padding: 0;
      padding-bottom: 9px;
    }
    .rate-number {
      padding: 0 40px 0 13px;
      font-size: 16px;
    }
    .icon-wrap {
      width: 48px;
    height: 48px;
    }
    .icon {
    font-size: 26px
  }
  }
`;
export default DescriptionBookStyled;
