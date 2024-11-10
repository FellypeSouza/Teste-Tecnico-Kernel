import "./Nav.css";

export default function Nav(){
    return(
        <nav>
            <section className="search">
                <input type="text" placeholder="Digite uma receita"/>
                <button>Procurar</button>
            </section>
        </nav>
    );
}