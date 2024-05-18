import React from "react";

import Header from "./Componets/Header";

import Main from "./Componets/Main";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App