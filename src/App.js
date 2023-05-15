import './App.css';
import NotesList from "./components/NotesList";
import Header from "./components/Header";

function App() {

    return (
        <div className="App">
            <div className='container'>
                <Header/>
                <NotesList/>
            </div>
        </div>
    );
}

export default App;
