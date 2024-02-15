import { FC, useEffect, useState } from "react";
import SortStyled from "./SortGenre.styled";
import Select from 'react-select';
import { GenreType, SelectorType } from "../../../types";
import { errorToast } from "../../../utils/toasts/toasts";
import { getGenres } from "../../../api/urlApi";

const SortGenre:FC = () => {
  const [genre, setGenre] = useState<GenreType[]>([]);

  const genreTitle: SelectorType[] = genre.map((item: GenreType) => ({
    label: item.title,
    value: Number(item.id),
  }));

console.log(genreTitle)

  useEffect(() => {
    const getListGenres = async () => {
      try {
        const result = await getGenres();
        setGenre(result.data);
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log("get genres", err);
      }
    };
    getListGenres();
  }, []);

  return(
    <SortStyled>
<Select options={genreTitle} />
    </SortStyled>
  )
}

export default SortGenre;