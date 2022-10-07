import Image from "next/image";

import {
  CardProduct,
  CardBody,
  ProductTitle,
  ProductPrice,
} from "./Card.styled";
import "../../../lib/hooks/format/currency";

export default function Card({ title, price, img, alt, children }) {
  return (
    <CardProduct>
      <Image src={img} alt={alt} width={402} height={519} quality={100} />
      <CardBody>
        <div>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price.currency()}</ProductPrice>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_7_3)">
            <path
              d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z"
              fill="#707070"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_3">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </CardBody>
      {children}
    </CardProduct>
  );
}
