import React, { useEffect, useState } from "react";

export function TypeCard() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      setTypes(data.results);
    };

    fetchTypes();
  }, []);

  return (
    <>
     <li className={`typeList all selectType`} key="all">all</li>
      {types.map((type) => (
        <li className={`typeList ${type.name}`} key={type.name}>{type.name}</li>
      ))}
    </>
  );
}
