import { FC } from "react";
import PaginationStyled from "./Pagination.styled";
import { Pagination } from "@mui/material";


const Paginate:FC = () => {
    return (
<PaginationStyled>
<Pagination  count={11} defaultPage={6} />
</PaginationStyled>
    )
}
export default Paginate;