import { FC, SetStateAction, useEffect, useState } from "react";
import SortStyled from "./SortGenre.styled";
import Select from 'react-select';
import { GenreType, SelectorType } from "../../../types";
import { errorToast } from "../../../utils/toasts/toasts";
import { getGenres } from "../../../api/urlApi";
import { useSearchParams } from "react-router-dom";

const customStyles = {
  control: (base: any, state: { isFocused: any; }) => ({
    ...base,
    background: "#F0F4EF",
    // height: '48px',
    // match with the menu
    borderRadius: '16px',
    // Overwrittes the different states of border
    borderColor: "#F0F4EF",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      // borderColor: state.isFocused ? "red" : "blue"
    }
  }),
  menu: (base: any) => ({
    ...base,
    // override border radius to match the box
    background: "#F0F4EF",
    borderRadius: '16px',
    borderColor: "#F0F4EF",
    // kill the gap
    marginTop: 16
  }),
  menuList: (base: any) => ({
    ...base,
    background: "#F0F4EF",
    borderRadius: '16px',
    borderColor: "#F0F4EF",
    // kill the white space on first and last option
    padding: 0
  })
};

const SortGenre:FC = () => {
  const [genre, setGenre] = useState<GenreType[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<GenreType[]>([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const genreTitle: SelectorType[] = genre.map((item: GenreType) => ({
    label: item.title,
    value: Number(item.id),
  }));

console.log(genreTitle)

  useEffect(() => {
    const getListGenres = async () => {
      try {
        const result = await getGenres();
        setGenre(result?.data);
      } catch (err: any) {
        errorToast(err.response?.data.message);
        console.log("get genres", err);
      }
    };
    getListGenres();
  }, []);

    //@ts-ignore
  const serializeFormQuery = (e) => {
        //@ts-ignore
    const paramsStr = e.map((item) => item.value).join('-');//fix url?
    return ({genre: paramsStr})
  }

  //@ts-ignore
  const handleGaenreSelect = (e) => {
    console.log(e);
    let params = serializeFormQuery(e);
    setSearchParams(params);
    // setSelectedGenres(e;
  };

  return(
    <SortStyled>
      <Select
        options={genreTitle}
        isMulti
        placeholder='Genre'
        styles={customStyles}
        onChange={handleGaenreSelect}
      />
    </SortStyled>
  )
}

export default SortGenre;