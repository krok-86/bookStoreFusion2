import { FC } from "react";
import SortPriceStyled from "./SortPrice.styled";

import { Cascader, Slider } from 'antd';

interface Option {
    value: string | number;
    label: string;
    children?: Option[];
  }
  
  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    //   children: [
    //     {
    //       value: 'hangzhou',
    //       label: 'Hangzhou',
    //       children: [
    //         {
    //           value: 'xihu',
    //           label: 'West Lake',
    //         },
    //       ],
    //     },
    //   ],
    },
    // {
    //   value: 'jiangsu',
    //   label: 'Jiangsu',
    //   children: [
    //     {
    //       value: 'nanjing',
    //       label: 'Nanjing',
    //       children: [
    //         {
    //           value: 'zhonghuamen',
    //           label: 'Zhong Hua Men',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  const onChange = (value: string[]) => {
    console.log(value);
  };

const SortPrice:FC = () => {
    return(
<SortPriceStyled>
<Cascader options={options}
// onChange={onChange}
placeholder="Please select"
/>
<Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
</SortPriceStyled>
    )
};
export default SortPrice;