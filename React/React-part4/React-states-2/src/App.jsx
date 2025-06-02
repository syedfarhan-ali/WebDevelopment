import "./App.css";
import ToDoList from "./ToDoList";
import LudoBoard from "./LudoBoard";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
    let winCondition = (ticket) => {
        return ticket[0] === 0;
    };

    return (
        <>
            <Lottery n={3} winningSum={15} winCondition={winCondition} />
        </>
    );
}

export default App;
