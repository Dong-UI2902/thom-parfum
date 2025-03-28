import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

const TagHeader: FC<{
  title: string;
  desc?: string;
  url?: string;
}> = ({ title, desc, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url}></link>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={desc}></meta>
      <meta property="og:url" content={url}></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={desc}></meta>
    </Helmet>
  );
};

export default TagHeader;
