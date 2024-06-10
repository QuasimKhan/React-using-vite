import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(); // Initialize state as null to check if data is loaded

  useEffect(() => {
    fetch('https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech')
      .then(res => res.json())
      .then(data => {
        var fetchedData = [];

        for (var i = 0; i < data.length; i++) {
          fetchedData += data[i];
        }

        
        setData(fetchedData);
        data.forEach(element => {
          console.log(element);
          
        });
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }); // Add an empty dependency array to run the effect only once

  return (
    <>
      <h1>Data from JSON:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Pretty-print JSON data
      ) : (
        <p>Loading...</p> // Display a loading message while data is being fetched
      )}
    </>
  );
}

export default App;
