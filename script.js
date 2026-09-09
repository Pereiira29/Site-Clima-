const inputCidade = document.getElementById("cidade");
const botaoBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

const chave = "df7c627bf05dd0d63bd1c4d3cdba8637";

botaoBuscar.addEventListener("click", async function() {

    const cidade = inputCidade.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;

    try{
        const resposta = await fetch(url);
        
        if(!resposta.ok) {
            throw new Error("Cidade não encontrada");
        }
        
    
    const dados = await resposta.json();
    let icone = "🌤️"
    if (dados.weather[0].main === "Clear"){
        icone= "☀️";
    } else if(dados.weather[0].main === "Clouds"){
        icone = "☁️";
    } else if(dados.weather[0].main === "Rain"){
        icone = "🌧️";
    } else if(dados.weather[0].main === "Thunderstorm"){
        icone = "⛈️";
    } else if(dados.weather[0].main === "Snow"){
        icone = "❄️"
    } else if(dados.weather[0].main === "Mist"){
        icone = "🌫️"
    }
        resultado.innerHTML = `
        <h2> ${dados.name}</h2>
        <p class="icone">${icone}</p>
        <p>Temperatura: ${dados.main.temp}°C </p>
        <p>Clima: ${dados.weather[0].description} </p>
        `; 
    } catch (erro) {
        resultado.innerHTML = "Cidade não encontrada";
    }
        
    });

