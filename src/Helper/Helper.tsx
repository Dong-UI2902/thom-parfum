import React from "react";
import { Route } from "react-router-dom";

export const formatter = new Intl.NumberFormat("vi", {
  style: "currency",
  currency: "VND",
});

export const FormatMoney = (props: any) => {
  if (isNaN(props.price) && props.price !== undefined) {
    return (
      <>
        {formatter.format(props.price.substring(0, props.price.indexOf("-"))) +
          "-" +
          formatter.format(
            props.price.substring(
              props.price.indexOf("-") + 1,
              props.price.length
            )
          )}
      </>
    );
  }
  return <>{formatter.format(props.price)}</>;
};

export const apartFrom = (product: any, index: number) => {
  if (!product.id) return 0;

  const a = product.prices[index]?.price;
  const b = product.prices[index]?.salePrice;

  return a - b;
};

const registerOptionalParamRoute = (
  optionalParams: string[],
  element: Element | any
) => {
  if (optionalParams.length === 0) {
    return <></>;
  }

  const param = optionalParams[0];
  optionalParams.splice(0, 1);

  return (
    <Route path={param} element={element}>
      {registerOptionalParamRoute(optionalParams, element)}
    </Route>
  );
};

export const registerOptionalParams = (path: string, element: JSX.Element) => {
  const params = path.split("/");
  let basePath = "";
  const optionalParams = [];

  for (let i = 0; i < params.length; i++) {
    if (params[i] === "") {
      continue;
    }

    if (!params[i].includes("?")) {
      basePath += "/" + params[i];
    } else {
      optionalParams.push(params[i].substr(0, params[i].length - 1));
    }
  }

  return (
    <Route path={basePath} key={basePath} element={element}>
      {registerOptionalParamRoute(optionalParams, element)}
    </Route>
  );
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const FANPAGE = "https://www.facebook.com/thomparfum.authentic";

export const PHONE_NUMBER = "0588 2222 00";

export const INS = "https://www.instagram.com/thomparfum";

export const TIKTOK = "https://www.tiktok.com/@thomparfum.com";
