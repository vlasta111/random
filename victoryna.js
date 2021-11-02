

function renderPlayers(){
    let numberPlayers = document.getElementById('numberPlayers').value;
    var playersList = document.getElementById('players');
    let button = document.getElementById('btnVictoryna');
    let message = document.getElementById('demo')

    try{
        if(numberPlayers > 10) throw 'Кількість гравців може бути: від 2 до 10'
        if(numberPlayers < 2) throw 'Кількість гравців може бути: від 2 до 10'
        if(numberPlayers == '') throw 'Вкажіть кількість гравців'
        if(isNaN(numberPlayers)) throw 'Ви вказали не число'
        if(Number(numberPlayers)) 
            for(i = 1 ;i <= numberPlayers; i++){
                var div = document.createElement('DIV');
                div.append("Гравець" + i );
                div.setAttribute('id', 'player')
                playerContent = div.innerHTML
                playersList.appendChild(div)
            }
        
            function victoryna(){
            
                for(g = 1;g <= numberPlayers; g++){
            
                    var element = document.getElementById('player')
                    element.remove()
            
                    let score = (Math.ceil(Math.random()*10))
            
                    var div = document.createElement('DIV');
                    div.setAttribute('id', 'player')
                    div.append('Гравецю' + g + " Випало число: '" + score );
                    playersList.appendChild(div)
                    
                }
            
        
            }


            button.innerHTML = 'startGame';
            button.onclick = victoryna
        
    }
    catch(err){
        message.innerHTML = 'Error: ' + err + ".";
    }
    finally{
        message = ''
    }


}

function reset(){
    let playerlist = document.getElementById('players')
    let btnVictoryna = document.getElementById('btnVictoryna')
    while(playerlist.firstChild){
        playerlist.removeChild(playerlist.lastChild)
    }

    btnVictoryna.onclick = renderPlayers;
    btnVictoryna.innerHTML = 'Render Players';



}


