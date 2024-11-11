import React, {useState} from "react";
import "./Nav.css";

export default function Nav({onSearch}){
    const [searchTerm, setSearchTerm] = useState('');

    // Função para atualizar o termo de busca no estado local
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Função para enviar o termo de busca ao componente pai
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // Chama a função do componente pai
    };

    return(
        <nav>
            <h1>Receitas Culinárias</h1>
            <form onSubmit={handleSearch} className="search">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Digite uma receita"
                />
                <button type="submit">Buscar</button>
            </form>
        </nav>
    );
}