import { useParams } from "react-router-dom"
import DescriptionBookStyled from "./DescriptionBook.styled"
import { useEffect, useState } from "react";
import { getBookListById } from "../../redux/slices/book";
import { IBook } from "../../types";
import { errorToast } from "../../utils/toasts/toasts";

// export interface IEditPost {
//   id: string;
//   postText: string;
// }

const DescriptionBook = () => {
    const { id } = useParams<{ id: string }>()
    const [bookData, setBookData] = useState<IBook | undefined>();

    useEffect(() => {
        const getOneBookById = async () => {
          if (!id) return;
          try {
            const idAsNumber = parseInt(id);
            const result = await getBookListById(idAsNumber);
            //@ts-ignore
            setBookData(result.data);
          } catch (err: any) {
            errorToast(err.response.data.message);
            console.log("getPostById", err);
          }
        };
        getOneBookById();
      }, [id]);
      console.log(bookData)
    return (
        <DescriptionBookStyled>

        </DescriptionBookStyled>
    )
}
export default DescriptionBook