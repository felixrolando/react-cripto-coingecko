import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCripto } from "./api/index";
import { Table } from "./components/Table";

function App() {
  const [search, setSearch] = useState("");
  const { isLoading, isError, error, data } = useQuery("cripto", getCripto);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a cripto"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <Table coins={data} search={search} />
      </div>
    </div>
  );
}

export default App;
