import React,{useEffect, useState} from "react";
import "./Main.css";

export default function Main(){
        // Estado para armazenar os dados da refeição
        const [meal1, setMeal1] = useState(null);
        const [meal2, setMeal2] = useState(null);
        const [carregando, setCarregando] = useState(true);
    
        // useEffect para buscar a refeição aleatória quando o componente for montado
        useEffect(() => {
            const fetchMeals = async () => {
                try {
                    // Faz duas requisições ao mesmo tempo
                    const [response1, response2] = await Promise.all([
                        fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
                        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                    ]);
    
                    // Converte as respostas em JSON
                    const data1 = await response1.json();
                    const data2 = await response2.json();
    
                    // Armazena os dados de cada resposta nos estados correspondentes
                    setMeal1(data1.meals[0]);
                    setMeal2(data2.meals[0]);
                } catch (error) {
                    console.error("Erro ao buscar dados:", error);
                } finally {
                    setCarregando(false); // Finaliza o carregamento
                }
            };
    
            fetchMeals();
        }, []); // Executa apenas uma vez ao montar o componente
    
        // Renderização da página
        return (
            <>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <main>
                <section className="meals">
                    <section className="meal">
                        {meal1 && (
                            <section>
                                <img className="mealImage" src={meal1.strMealThumb} alt={meal1.strMeal}/>
                                <h3>{meal1.strMeal}</h3>
                            </section>
                        )}
                    </section>
                    <section className="meal">
                        {meal2 && (
                            <section>
                                <img className="mealImage" src={meal2.strMealThumb} alt={meal2.strMeal}/>
                                <h3>{meal2.strMeal}</h3>
                            </section>
                        )}
                    </section>
                </section>
                </main>
            )}
        </>
        );
}