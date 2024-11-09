import "./Nav.css";

export default function Nav(){
    return(
        <nav>
            <h3>Receitas culinárias</h3>
            <section className="search">
                <input type="text" placeholder="Digite uma receita"/>
                <button>Procurar</button>
            </section>
        </nav>
    );
}