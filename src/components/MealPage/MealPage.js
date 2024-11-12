import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Nav from "../Nav/Nav";
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
        <section>
            <Nav/>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                meal && (
                    <main>
                        <h1>{meal.strMeal}</h1>
                        <p><strong>Categoria:</strong> {meal.strCategory}</p>
                        <p><strong>Área:</strong> {meal.strArea}</p>
                        <p>
                            <strong>Ingredientes:</strong> 
                            {meal.strIngredient1}
                            {meal.strIngredient2}
                            {meal.strIngredient3}
                            {meal.strIngredient4}
                            {meal.strIngredient5}
                            {meal.strIngredient6}
                            {meal.strIngredient7}
                            {meal.strIngredient8}
                            {meal.strIngredient9}
                            {meal.strIngredient10}
                            {meal.strIngredient11}
                            {meal.strIngredient12}
                            {meal.strIngredient13}
                            {meal.strIngredient14}
                            {meal.strIngredient15}
                            {meal.strIngredient16}
                            {meal.strIngredient17}
                            {meal.strIngredient18}
                            {meal.strIngredient19}
                            {meal.strIngredient20}
                        </p>
                        <p><strong>Instruções:</strong> {meal.strInstructions}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '500px', borderRadius: '8px' }} />
                    </main>
                )
            )}
        </section>
    );
}