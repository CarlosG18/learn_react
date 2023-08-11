import Square from "./Square";
import './css/Board.css'

function Board(){
    return(
        <div className="Board">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
};

export default Board