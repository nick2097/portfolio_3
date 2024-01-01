import './App.css';
import styled from 'styled-components';

import {Main} from "./layout/sections/main/Main";
import {Header} from "./layout/header/Header";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
          <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

