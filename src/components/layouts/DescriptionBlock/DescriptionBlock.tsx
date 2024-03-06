import { Button } from "antd";
import { FC } from "react";

interface IDescriptionBlock {
    text: string,
    price: string,
    className?: string,
}

const DescriptionBlock:FC<IDescriptionBlock> = ({className, text, price}) => {
    return (
      <div className={className}>
        <div className="book-description">
        <div className="description">Description</div>
        <div className="description-text">{text}</div>
        <div className="price-block">
          <div className="price-cover">
            <div className="cover">Paperback</div>
            <Button className="price">{price}</Button>
        </div>
        <div className="price-cover">
          <div className="cover">Hardcover</div>
          <Button className="price">{price}</Button>
        </div>
      </div>
      </div>
      </div>
    )
}

export default DescriptionBlock;