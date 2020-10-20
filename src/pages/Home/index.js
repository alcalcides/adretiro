import React from "react";

import { siteName } from "../../adminAssets.json";

export default function () {
  return (
    <div className="App">
      <header>
        <h1>{siteName}</h1>
      </header>
    </div>
  );
}
