import { FC } from "react";
import HomePageStyled from "./HomePage.styled";
import Banner from "../Banner/Banner";
import SortGenre from "../Sort/SortGenre/SortGenre";
import SortTitle from "../Sort/SortTitle/SortTitle";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
import SortPrice from "../Sort/SortPrice/SortPrice";
import Paginate from "../Pagination/Pagination";
import AuthNow from "../AuthNow/AuthNow";

const HomePage: FC = () => {
    return (
<HomePageStyled>
<Banner />
 <SortGenre />
 <SortTitle />
 <SortPrice />
 <BookCardSmall />
 <Paginate />
 <AuthNow />
</HomePageStyled>
    )
}
export default HomePage;