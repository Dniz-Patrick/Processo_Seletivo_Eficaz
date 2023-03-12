function search() {
    var pesq = document.getElementById('search').value;
    var base = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    var api_search = base + pesq;
    var json_search; 
    
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    var audioPlayer = document.getElementById('myAudio');

    

    console.log(api_search);

    fetch(api_search)
        .then(response => response.json())
        .then(data => {
            var definitions = data[0].meanings[0].definitions;
            var synonyms = data[0].meanings[0].synonyms;
            var audio = data[0].phonetics[0].audio;

            audioPlayer.src = audio;

            console.log(definitions);
            console.log(synonyms);
            console.log(audio);
            
            const p = document.createElement('p');
            p.innerHTML = `<strong id="titulo">Definitions:</strong> <br><br> ${definitions.map(def => def.definition).join('<br>')} | <br><br> <strong id="titulo">Synonyms:</strong> <br><br> ${synonyms.join(', ')}`;
            resultadosDiv.appendChild(p);
             })
            .catch(error => {
            console.error('Ocorreu um erro ao buscar os dados da API', error);

          });
          audioPlayer.style.display = 'block';
        }