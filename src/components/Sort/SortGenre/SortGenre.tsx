import { FC } from "react"
import SortStyled from "./SortGenre.styled";
import { CATALOG } from "../../../constants";
import { Cascader } from 'antd';

interface Option {
  value: string | number;
  label: string;
  // children?: Option[];
  disableCheckbox?: boolean;
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    // children: new Array(20)
    //   .fill(null)
    //   .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    // children: [
    //   {
    //     label: 'Little',
    //     value: 'little',
    //     children: [
    //       {
    //         label: 'Toy Fish',
    //         value: 'fish',
    //         disableCheckbox: true,
    //       },
    //       {
    //         label: 'Toy Cards',
    //         value: 'cards',
    //       },
    //       {
    //         label: 'Toy Bird',
    //         value: 'bird',
    //       },
    //     ],
    //   },
    // ],
  },
];

const onChange = (value: string[][]) => {
  console.log(value);
};

const SortGenre:FC = () => {
  return(
    <SortStyled>
      <div>{CATALOG}</div>
      <Cascader
    style={{ width: '100%' }}
    options={options}
    // onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
    </SortStyled>
  )
}

export default SortGenre;