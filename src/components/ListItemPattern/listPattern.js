import React from "react";

const ListPattern = ({ items, resourcName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => {
        {
          console.log({ ...{ [resourcName]: item } });
        }
        return <ItemComponent key={i} {...{ [resourcName]: item }} />;
      })}
    </>
  );
};

export default ListPattern;
