import { useState, useEffect } from "react";
import ProductData from './products.json';


/* Setting up a fake fetch behavior so that we can work with a loader*/
function getAsyncData(){
    const dataPromise = new Promise(function(resolve, reject) {
        window.setTimeout(function() {
          resolve(ProductData);
        }, 1000);
      });
    return dataPromise;
}

/* hook to fetch and setup data, includes a loading state*/
export default function useFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const json = await getAsyncData();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
