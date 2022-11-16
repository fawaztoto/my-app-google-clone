import React from "react";
import { useState, useEffect } from "react";
import API_KEY from "./Keys";

 const CONTEXT_KEY = "d3e12c55e05d74071"; 

const UseGoogleSearch = (term) => {
    
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyCO4Ws4Zsx5rW3yJocFbiAUhVmfABiutD0&cx=d3e12c55e05d74071&q=${term || 'qatar'}`

      )
      .then(response => response.json())
      .then( result => {
        setData(result)
      })
    }

    fetchData();

  }, [term]);


return { data }
};

export default UseGoogleSearch;





 