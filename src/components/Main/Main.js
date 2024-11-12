import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function Main({ meals, carregando }){
        return (
        <main className="main">
            {carregando ? (
                <p className="confirmation" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Carregando...</p>
            ) : (
                <section className="meals">
                    {meals.length > 0 ? (
                        meals.map((meal) => (
                            <section key={meal.idMeal} className="meal">
                                <Link to={"/mealPage/" + meal.idMeal} key={meal.idMeal}>
                                    <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                                    <figcaption>{meal.strMeal}</figcaption>
                                    <p>Categoria: {meal.strCategory}</p>
                                </Link>                               
                            </section>
                        ))
                    ) : (
                        <p className="confirmation" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Nenhuma refeição encontrada.</p>
                    )}
                </section>
            )}
        </main>
        );
}