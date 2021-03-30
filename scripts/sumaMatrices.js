const item = document.querySelectorAll(".aside-list_item");
const showList = document.querySelectorAll('.aside-sublist');
const main = document.getElementById("app");
const toggler = document.querySelector('.toggler');
const toggleNav = document.querySelector('.toggler-nav');

main.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(e.target.classList.contains('app-operation__btn')){
        const i = document.getElementById("columns");
        const container = document.querySelector('.app-operation__operation');
        const j = document.getElementById("files");
        const tip = document.querySelector('.app-operation__tip');
        
        const operationContainers = document.createElement("div");
        const matrixContainers = document.createElement('div');
        const gridContainer = document.createElement("div");
        const gridContainer2 = document.createElement("div");
        const result = document.createElement("div");
        let columns = i.value;
        let files = j.value;        

        tip.classList.add('hide');

        operationContainers.classList.add("app-operation__tip");
        operationContainers.style.boxShadow = `var(--shadow)`;
        container.appendChild(operationContainers);

        matrixContainers.classList.add("matrix-operation-container");
        operationContainers.appendChild(matrixContainers);

        gridContainer.classList.add("matrix-grid-container");
        gridContainer2.classList.add("matrix-grid-container");
        gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${files}, 1fr)`;
        gridContainer2.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gridContainer2.style.gridTemplateRows = `repeat(${files}, 1fr)`;
        matrixContainers.appendChild(gridContainer);
        matrixContainers.appendChild(gridContainer2);

        result.classList.add("matrix-grid-container");
        result.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        result.style.gridTemplateRows = `re;peat(${files}, 1fr)`;
        
        matrixContainers.appendChild(result);



        
        const colInp = [];
        const filInp = [];
        
        for(let i = 0; i<columns; i++) { 
            for(let j = 0; j < files ; j++){
                filInp[i] = document.createElement('input');
                gridContainer.appendChild(filInp[i]);
                filInp[i].classList.add("matrix-input");
                filInp[i].setAttribute('placeholder',`a${i+1}${j+1}`);
                filInp[i].setAttribute('id',`a${i+1}${j+1}`);
                

                
            }
        }

        for(let i = 0; i<columns; i++) { 
            for(let j = 0; j < files ; j++){
                filInp[i] = document.createElement('input');
                gridContainer2.appendChild(filInp[i]);
                filInp[i].classList.add("matrix-input")
                filInp[i].setAttribute('placeholder',`b${i+1}${j+1}`);
                filInp[i].setAttribute('id',`b${i+1}${j+1}`);
            }
        }

        

        const calcBtn = document.createElement('button');
        calcBtn.innerHTML = "calcular";
        calcBtn.classList.add("app-operation__calcBtn");
        calcBtn.style.marginTop ="16px";
        operationContainers.appendChild(calcBtn);

        calcBtn.addEventListener('click',(e)=> {
            e.preventDefault();

           /*  console.log(arrayA);            
            console.log(arrayB); */

            for(let i = 0; i<columns; i++) { 
                for(let j = 0; j < files ; j++){
                    filInp[i] = document.createElement('div');
                   
                    result.appendChild(filInp[i]);
                    filInp[i].classList.add("matrix-input");                
                }
            }

            const arrayA = [];
            const arrayB = [];
            const arrayC = [];
            for(let i = 0; i<=gridContainer.childNodes.length-1; i++){
                console.log(gridContainer.childNodes[i].value);
                arrayA[i] = gridContainer.childNodes[i].value;
                console.log(gridContainer2.childNodes[i].value);
                arrayB[i] = gridContainer2.childNodes[i].value;
                result.childNodes[i].innerHTML = `${parseInt(arrayA[i]) + parseInt(arrayB[i])}`;
                
            }      

            
            
            
        })                


        


        
        
    }
});