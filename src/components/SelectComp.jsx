import React from "react";
import { Select } from "antd";
const SelectComp = () => {
  const pokemons = ["pikachu", "charizard", "bulbasaur", "snorlax"];
  const tags = [
    "web dev",
    "jr web dev",
    "react dev",
    "frontend dev",
    "backend dev",
    "fullstack dev",
    "mern stack dev",
  ];
  return (
    <div>
      <p>Which is your favourite pokemon?</p>
      <Select
        placeholder="select your pokemon"
        style={{ width: "50%", margin: "0 auto" }}
      >
        {pokemons.map((p, i) => {
          return (
            <Select.Option value={p} key={i}>
              {p}
            </Select.Option>
          );
        })}
      </Select>
      <div style={{ marginTop: "1rem" }}>
        <p>Which is your tag ?(you can even type and search)</p>
        <Select
          placeholder="select your position"
          mode="multiple"
          maxTagCount={2}
          allowClear
          //   filterOption
          //   filterSort
          style={{ width: "25%", margin: "0 auto" }}
        >
          {tags.map((t, i) => {
            return (
              <Select.Option value={t} key={i}>
                {t}
              </Select.Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default SelectComp;
