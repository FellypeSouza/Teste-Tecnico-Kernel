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
                    <section>
                        <h1>{meal.strMeal}</h1>
                        <p><strong>Categoria:</strong> {meal.strCategory}</p>
                        <p><strong>Área:</strong> {meal.strArea}</p>
                        <p><strong>Instruções:</strong> {meal.strInstructions}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '500px', borderRadius: '8px' }} />
                    </section>
                )
            )}
        </section>
    );
}