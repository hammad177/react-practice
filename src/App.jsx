import React from "react";
import "./App.css";
import ChatApp from "./component/main";
// import Login from "./component/loginPage"

class App extends React.Component {
  render() {
    return (
      <header>
        <ChatApp />
      </header>
    );
  }
}
export default App;
