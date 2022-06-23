import React from "react";
import peopleData from "../data/data.json";
import Card from "./Card";
const Container = () => {
  return (
    <section className='Container flex flex-col md:grid bg-transparent space-y-12 md:space-y-0 mx-auto my-10 px-4  lg:w-[90vw] lg:max-w-[1690px]'>
      {peopleData.map((person) => (
        <Card
          key={person.id}
          name={person.name}
          id={person.id}
          content={person.content}
          color={person.color}
          text={person.textColor}
          sub={person.subColor}
          quoteColor={person.quotesColor}
          quote={person.quote}
          gridArea={person["grid-area"]}
        />
      ))}
    </section>
  );
};

export default Container;
