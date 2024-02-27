import { useParams } from "react-router-dom"
import DescriptionBookStyled from "./DescriptionBook.styled"
import { useEffect, useState } from "react";
import { getBookListById } from "../../redux/slices/book";
import { IBook } from "../../types";
import { errorToast } from "../../utils/toasts/toasts";
import { URLS } from "../../constants";

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
      console.log(bookData?.price)
    return (
        <DescriptionBookStyled>
          <div className="book-wrap">
            <div className="book-pic-wrapper">
            <img
            className="book-pic"
            // src={`${URLS.MAINURL}${bookData?.picture}`}
            src= "/images/narnia.jpeg"
            alt=""
          />
            </div>
            <div>
              <div>milk and huney</div>
              <div>pupi kudi</div>
              <div>5*</div>
              <div>*****</div>
              <div>rate this book</div>
            </div>
          </div>
<div>Hello world</div>
        </DescriptionBookStyled>
    )
}
export default DescriptionBook