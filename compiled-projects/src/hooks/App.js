import React from "react";
import { useGeolocation } from "./useGeolocation"; // adjust this import path based on where your hook is located

function App() {
  const { isLoading, position, error, getPosition } = useGeolocation();

  // Show a button for the user to get their position
  // When clicked, it calls the getPosition function from our hook
  return (
    <div>
      <h1>Geolocation App</h1>
      <button onClick={getPosition}>Get Position</button>

      {/* Display loading message if the geolocation data is being fetched */}
      {isLoading && <p>Loading...</p>}

      {/* Display error message if there was an error fetching geolocation data */}
      {error && <p>Error: {error}</p>}

      {/* Display geolocation data if available */}
      {position && (
        <div>
          <h2>Your Position</h2>
          <p>Latitude: {position.lat}</p>
          <p>Longitude: {position.lng}</p>
        </div>
      )}
    </div>
  );
}

export default App;
