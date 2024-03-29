showMe = []
function displayTodo(){
    if(one.value == "" || two.value == ""){
        // console.log('Can not be Blank');
        // console.error('Can not be Blank');
        showError.style.display = 'block'
    } else { 
        showError.style.display = 'none'
        

        let calculator = {
            yourName: document.getElementById('one').value,
            partner: document.getElementById('two').value

        };

        showMe.push(calculator)

        document.getElementById('one').value = ''
        document.getElementById('two').value = ''

        // showCalculator()

        
        let ans = Math.round(Math.random()*100)
        console.log(ans + '%');

        show.innerHTML = `<button style="background-color: brown; color: white; height: 5vh; width: 100%; margin-top: 3%;" >${calculator.yourName} and  ${calculator.partner}'s Love = ${ans + '%'}</button> `

    }
 }




//  function showCalculator(){
//     // sndDiv.value =Firdiv.value
//     show.innerHTML = ''
//     // for(var i = 0; i < plsShow.length; i++)
//     showMe.map((ans)=>{
//         show.innerHTML += `<h5>${ans}</h5> 
        
//         `
//     })
        
    
    
// }



/* <h6>${calculator.yourName}</h6>
        <h6>${calculator.partner}</h6> */