import './App.css';
import styled from 'styled-components';

import {Main} from "./layout/sections/main/Main";
import {Header} from "./layout/header/Header";


function App() {
    return (
        <div className="App">
          <Header/>
            <Main/>
        </div>
    );
}

export default App;

