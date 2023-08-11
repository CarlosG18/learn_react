import Square from "./Square";
import './css/Board.css'

function Board(){
    return(
        <div className="Board">
            <Square conteudo={'x'} />
            <Square conteudo={'x'}/>
            <Square conteudo={'o'}/>
            <Square conteudo={'x'}/>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
};

export default Board