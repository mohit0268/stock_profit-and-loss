const inputStocks=document.querySelectorAll(".stocks-inputs");
const btnStocks=document.querySelector("#btn-stocks");
const output=document.querySelector(".output");



function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss=(initial-current) * quantity;
        var lossPercentage=(loss/initial)*100; 
        showOutput("The loss is "+ loss +" and the percentage is" + lossPercentage);
        output.style.color="red";
       }
       else if(initial<current){
           var profit=(current-initial) * quantity;
           var profitPercentage=(profit/initial)*100;
           showOutput("the profit is "+ profit + "and tha percentage is "+profitPercentage);
           output.style.color="green";
       }
       else{
           
           showOutput("Niether profit Nor loss");
        }

}

const submitHandler= ()=>{
    const submit=calculateProfitAndLoss(Number(inputStocks[0].value),Number(inputStocks[1].value),Number(inputStocks[2].value));
    return submit;
}

const showOutput=(message)=>{
    
    output.innerText=message;
}




btnStocks.addEventListener("click",submitHandler);



