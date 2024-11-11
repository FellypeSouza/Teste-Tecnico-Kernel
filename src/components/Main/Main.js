import React,{useEffect, useState} from "react";
import "./Main.css";

export default function Main({ meals, carregando }){
        return (
        <main>
            {carregando ? (
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Carregando...</p>
            ) : (
                <section className="meals">
                    {meals.length > 0 ? (
                        meals.map((meal) => (
                            <section key={meal.idMeal} className="meal">
                                <a href={"http://www.themealdb.com/api/json/v1/1/search.php?s=" + meal.strMeal} target="_blank">
                                <img className="mealImage" src={meal.strMealThumb} alt={meal.strMeal}/>
                                <figcaption>{meal.strMeal}</figcaption>
                                </a>
                            </section>
                        ))
                    ) : (
                        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Nenhuma refeição encontrada.</p>
                    )}
                </section>
            )}
        </main>
        );
}