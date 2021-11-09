import React from "react";
import "./style.scss";

const SearchComponent = () => {
  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Buscar por nome</label>
      <input type="text" placeholder="Digite o nome da instituição" />
    </form>
  );
};

export default SearchComponent;
