import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "./Link";
import { ProductProps } from "../context/types";
import { FormatMoney } from "../Helper/Helper";
import "../styles/Product.scss";

export const CardProduct: React.FC<ProductProps> = ({ slug, name, prices }) => {
  const getSaleNumber = (price: number, salePrice: number) => {
    const a = price / 100;
    const b = (price - salePrice) / a;

    // if (b > 50) {
    //   return 50;
    // }

    return Math.round(b);
  };

  return (
    <Link href={`/product/${slug}`} style={{ position: "relative" }}>
      <Card className="product__card">
        {prices[0].salePrice && (
          <div className="ribbon">
            <span className="ribbon1">
              <span>
                {`Giảm ${getSaleNumber(
                  Number(prices[0].price),
                  Number(prices[0].salePrice)
                )}%`}
              </span>
            </span>
          </div>
        )}
        <CardMedia
          image={"https://lh3.googleusercontent.com/d/" + prices[0].image}
          title={name}
          component="img"
          className="product__card-img"
          loading="lazy"
        />
        <CardContent className="product__card-content">
          <div className="product__card-title">{name}</div>
          <div className="text-price">
            <p>
              <FormatMoney price={prices[0].salePrice || prices[0].price} />
            </p>
            <p>
              {prices[0].salePrice && <FormatMoney price={prices[0].price} />}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
