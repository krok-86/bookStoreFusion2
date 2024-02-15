import { FC } from "react";
import HomePageStyled from "./HomePage.styled";
import Banner from "../Banner/Banner";
import SortGenre from "../Sort/SortGenre/SortGenre";
// import SortTitle from "../Sort/SortTitle/SortTitle";
// import SortPrice from "../Sort/SortPrice/SortPrice";
import AuthNow from "../AuthNow/AuthNow";
import BookCardsBlock from "../BookCardsBlock/BookCardsBlock";
import { useAppSelector } from "../../hook";
import { CATALOG } from "../../constants";


const HomePage: FC = () => {
    const isAuth = useAppSelector((state) => state.auth.data);
    return (
<HomePageStyled>
<Banner />
<div className="sort"><div className="sort-text">{CATALOG}</div>
 <SortGenre />
 </div>
 {/* <SortPrice />
 <SortTitle />  */}
 <BookCardsBlock />
 {!isAuth && (
 <AuthNow />
 )}
</HomePageStyled>
    )
}
export default HomePage;