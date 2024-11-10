import React,{useEffect, useState} from "react";
import "./Main.css";
import emptyIcon from "../../images/emptyIcon.png";


export default function Main(){
    
    
        // Estado para armazenar os dados da refeição
        const [meal, setMeal] = useState(null);
        const [carregando, setCarregando] = useState(true);
    
        // useEffect para buscar a refeição aleatória quando o componente for montado
        useEffect(() => {
            const fetchMeal = async () => {
                try {
                    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                    const data = await response.json();
                    setMeal(data.meals[0]); // Armazena o primeiro item do array 'meals'
                } catch (error) {
                    console.error("Erro ao buscar dados:", error);
                } finally {
                    setCarregando(false); // Finaliza o carregamento
                }
            };
    
            fetchMeal();
        }, []); // Executa apenas uma vez ao montar o componente
    
        // Renderização da página
        return (
            <main>
                {carregando ? (
                    <p>Carregando...</p>
                ) : (
                    meal && (
                        <section className="meals">
                            <section className="meal">
                                <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                                <h3>{meal.strMeal}</h3>
                                {/* <section className="mealInfo">
                                    <p><strong>Categoria:</strong> {meal.strCategory}</p>
                                    <p><strong>Área:</strong> {meal.strArea}</p>
                                </section> */}
                                {/* <p><strong>Instruções:</strong> {meal.strInstructions}</p> */}
                            </section>
                            <section className="meal">
                                <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                                <h3>{meal.strMeal}</h3>
                                {/* <section className="mealInfo">
                                    <p><strong>Categoria:</strong> {meal.strCategory}</p>
                                    <p><strong>Área:</strong> {meal.strArea}</p>
                                </section> */}
                                {/* <p><strong>Instruções:</strong> {meal.strInstructions}</p> */}
                            </section>
                            <section className="meal">
                                <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                                <h3>{meal.strMeal}</h3>
                                {/* <section className="mealInfo">
                                    <p><strong>Categoria:</strong> {meal.strCategory}</p>
                                    <p><strong>Área:</strong> {meal.strArea}</p>
                                </section> */}
                                {/* <p><strong>Instruções:</strong> {meal.strInstructions}</p> */}
                            </section>
                            <section className="meal">
                                <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                                <h3>{meal.strMeal}</h3>
                                {/* <section className="mealInfo">
                                    <p><strong>Categoria:</strong> {meal.strCategory}</p>
                                    <p><strong>Área:</strong> {meal.strArea}</p>
                                </section> */}
                                {/* <p><strong>Instruções:</strong> {meal.strInstructions}</p> */}
                            </section>
                        </section>
                    )
                )}
            </main>
        );
}