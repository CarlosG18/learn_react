import './person.css'

const data = {
    'nome': "carlos",
    'idade': 22,
}

function Person(){
    return(
        <>
            <h1 className="title">{data.nome}</h1>
            <p>idade: {data.nome}</p>
        </>
    );
}
  
export default Person