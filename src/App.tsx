import InputRange from "components/InputRange";
import StrengthLevel from "components/StrengthLevel";
import React from "react";

function App() {
  return (
    <>
      <InputRange min={0} max={20} title="Character Length" />
      <StrengthLevel qtdCheck={1}/>
    </>
  );
}

export default App;
