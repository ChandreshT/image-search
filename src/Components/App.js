import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./Search";
import ImageList from "./ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  onFormSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onFormSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
