import React, {useState, useEffect} from "react";
import "./Nav.css";

export default function Nav({onSearch, onSearchByCategory}){
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Busca as categorias da API ao montar o componente
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                const data = await response.json();
                setCategories(data.meals || []);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };

        fetchCategories();
    }, []);


    // Função para atualizar o termo de busca no estado local
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Função para enviar o termo de busca ao componente pai
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // Chama a função do componente pai
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        onSearchByCategory(category);
    };

    return(
        <nav>
            <h1>Receitas Culinárias</h1>
            <form onSubmit={handleSearch} className="search">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Digite uma receita ou selecione uma categoria"
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                        <option key={category.strCategory} value={category.strCategory}>
                            {category.strCategory}
                        </option>
                    ))}
                </select>
                <button type="submit">Buscar</button>
            </form>
        </nav>
    );
}