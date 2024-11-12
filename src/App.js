import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  const [meals, setMeals] = useState([]);
  const [carregando, setCarregando] = useState(false);
  // Função para buscar refeições por termo
  const buscarRefeicao = async (searchTerm) => {
    setCarregando(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setMeals(data.meals || []); // Define meals como o resultado ou uma lista vazia se não houver resultados
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        } finally {
            setCarregando(false);
        }
    };

  return (
    <div className="App">
      <Nav onSearch={buscarRefeicao}/>
      <Main meals={meals} carregando={carregando}/>
    </div>
  );
}
export default App;
