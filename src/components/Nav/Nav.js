import "./Nav.css";

export default function Nav(){
    return(
        <nav>
            <h1>Receitas Culinárias</h1>
            <section className="search">
                <input type="text" placeholder="Digite uma receita"/>
                <button>Procurar</button>
            </section>
        </nav>
    );
}