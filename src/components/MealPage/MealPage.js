import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ReturnNav from "../ReturnNav/ReturnNav";
import "./MealPage.css";

export default function MealPage(){
    const { id } = useParams(); // Obtém o ID da refeição a partir da URL
    const [meal, setMeal] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const fetchMealDetails = async () => {
            setCarregando(true);
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                setMeal(data.meals[0]);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setCarregando(false);
            }
        };
        fetchMealDetails();
    }, [id]);
    return(
        <section className="container">
            <ReturnNav/>
            {carregando ? (
                <p className="confirmation" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Carregando...</p>
            ) : (
                meal && (
                    <main className="mealPage">
                        <h1>{meal.strMeal}</h1>
                        <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                        <section className="mealInfo">
                            <p><strong>Categoria:</strong> {meal.strCategory}</p>
                            <p><strong>Área:</strong> {meal.strArea}</p>
                        </section>
                        <section className="mealIngredients">
                            <strong>Ingredientes:</strong>
                            <section className="ingredients">
                                {
                                    Array.from({ length: 20 }, (_, i) => i + 1) // Cria um array [1, 2, ..., 20]
                                    .map((num) => {
                                        const ingredient = meal[`strIngredient${num}`];
                                        const measure = meal[`strMeasure${num}`];
                                        // Verifica se o ingrediente não é null nem uma string vazia
                                        if (ingredient && ingredient.trim() !== "") {
                                            return (
                                                <p key={num}>
                                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} width="50px" height="50px" alt={ingredient}/>
                                                    {ingredient}, {measure}
                                                </p>
                                            );
                                        }
                                        return null; // Não renderiza se o ingrediente for inválido
                                })}
                            </section>    
                        </section>
                        <section className="mealInstructions">
                            <p><strong>Instruções:</strong></p>
                            <p>{meal.strInstructions}</p>
                        </section>
                        
                    </main>
                )
            )}
        </section>
    );
}