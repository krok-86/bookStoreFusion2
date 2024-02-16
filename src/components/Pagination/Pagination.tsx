import { FC } from "react";
import PaginationStyled from "./Pagination.styled";
import { Pagination } from 'antd';

const Paginate:FC = () => {
    return (
<PaginationStyled>
<Pagination defaultCurrent={1} total={5} />
</PaginationStyled>
    )
}
export default Paginate;