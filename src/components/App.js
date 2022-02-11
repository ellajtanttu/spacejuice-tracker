import React from "react";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      {/* <Control /> */}
      <h4>SpaceJuice Drum Inventory List</h4>
      <ul>
        <li>Raspberry Retrograde Drum | Trifid Nebula Co. | Raspberry | 12 canisters left | $18 / Canister</li>
        <li>Luminous Lime | Hydrus Galaxy Inc. | Lime | 121 canisters left | $24 / Canister </li>
      </ul>
      <hr/>
      <h4>Hydrus Galaxy Drum Detail Page</h4>
      <ul>
        <li>Luminous Lime</li>
        <li>Distributor: Hydrus Galaxy Inc.</li>
        <li>Flavor: Lime</li>
        <li>Price: $24 / Canister</li>
        <li>Canisters Remaining: 121</li>
        <li>BUTTON: One Canister Sold</li>
      </ul>

    </React.Fragment>
  )
}

export default App;