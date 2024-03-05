import styled from "styled-components";

const HomePageStyled = styled.div`
flex: 1;
/* margin: 0 15px;
position: relative;
min-height: 2132px;
overflow: hidden;
&::before {
    content: "";
    display: block;
} */
.sort {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
}
.sort-text {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
}
.sort-selectors {
    display: flex;
    gap: 20px;
    flex-flow: row wrap;
}

@media (min-width: 834px) {
    max-width: 834px;
    margin: 0 auto;
    .sort {
        padding: 60px 0 24px;
    }
    .sort-text {
        font-size: 32px;
    }
    .sort-selectors {
        gap: 19px;
    }
}

@media (min-width: 1280px) {
     max-width: 1280px;
    margin: 0 auto;
    .sort {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 38px;
    }
    .sort-text {
        font-size: 40px;
    }
}
`
export default HomePageStyled;