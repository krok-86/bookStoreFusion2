import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import SortStyled from './SortGenre.styled';
import { useSearchParams } from 'react-router-dom';
import { getGenres } from '../../../../api/urlApi';
import type { SelectorType, GenreType } from '../../../../types/types';
import { errorToast } from '../../../../utils/toasts/toasts';
import useClickOutside from '../../../../utils/useClickOutside';
import type { ErrorWithMessageType } from '../../../../redux/slices/book';

const SortGenre:FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [genre, setGenre] = useState<SelectorType[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getListGenres = async () => {
      try {
        const result = await getGenres();
        const res = result.data.map((item: GenreType) => ({
          label: item.title,
          value: Number(item.id),
        }));
        setGenre(res);

        const genreStr = searchParams.get('genre');
        const genresArr = genreStr?.split('-').map((item) => Number(item));
        const selectedOpts = res.reduce((acc, item) => {
          const filtered = genresArr?.filter((el) => el === item.value);
          if (filtered?.length) {
            acc.push(item.value);
          }
          return acc;
        }, [] as number[]);

        setSelectedGenres(selectedOpts);
      } catch (err: unknown) {
        errorToast((err as ErrorWithMessageType).response?.data.message);
      }
    };
    getListGenres();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenreSelect = (item: number) => {
    let changedGenres: number[] = [];
    if (selectedGenres.includes(item)) {
      changedGenres = selectedGenres.filter((el) => el !== item);
      setSelectedGenres(changedGenres);
    } else {
      changedGenres = [...selectedGenres, item];
      setSelectedGenres(changedGenres);
    }
    setSearchParams((searchParams) => {
      searchParams.set('genre', changedGenres.join('-'));
      searchParams.set('page', '1');
      return searchParams;
    });
  };

  useClickOutside({ ref, callback: () => setIsOpened(false) });

  return (
    <SortStyled ref={ref} isOpened={isOpened}>
      <div className="sort-genre">
        <div className="sort-genre-group" onClick={() => setIsOpened(!isOpened)}>
          <p className="sort-genre-title">Genre</p>
          <div className="sort-genre-option__icon">
            <img src="images/forward_blue.svg" alt="" />
          </div>
        </div>
        { isOpened && (<div className="sort-genre-wrap">
          {genre.map((item) => (<div className="sort-genre-option" key={item.value}>
            <div className="sort-genre-option__mark" onClick={() => handleGenreSelect(item.value)}>
              <img src={selectedGenres.includes(item.value) ? 'images/checked.svg' : 'images/unchecked.svg'} alt="" />
            </div>
          <div className="sort-genre-option__title">{item.label}</div>
                                </div>))}
                       </div>)}
      </div>
    </SortStyled>
  );
};

export default SortGenre;
