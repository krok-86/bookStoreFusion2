import { FC } from "react";
import HomePageStyled from "./HomePage.styled";

import Banner from "../../components/elements/Banner/Banner";

import BookCardsBlock from "../../components/elements/BookCardsBlock/BookCardsBlock";
import { CATALOG } from "../../constants/constants";
import { useAppSelector } from "../../hooks/hook";
import AuthNow from "../../components/elements/AuthNow/AuthNow";
import SortGenre from "../../components/elements/Sort/SortGenre/SortGenre";
import SortPrice from "../../components/elements/Sort/SortPrice/SortPrice";
import SortTitle from "../../components/elements/Sort/SortTitle/SortTitle";


const HomePage: FC = () => {
    const isAuth = useAppSelector((state) => state.auth.data);
    return (
<HomePageStyled>
<Banner />
<div className="sort"><div className="sort-text">{CATALOG}</div>
    <div className="sort-selectors">
        <SortGenre />
        <SortPrice />
        <SortTitle />
    </div>
 </div>
 <BookCardsBlock />
 {!isAuth && (
 <AuthNow />
 )}
</HomePageStyled>
    )
}
export default HomePage;