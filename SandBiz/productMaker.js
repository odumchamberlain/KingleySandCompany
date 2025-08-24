



var eventMake = "productEvent";
var evenData =  new Event(eventMake);


function calEventListener(index){

    
    document.addEventListener(eventMake,e=>{
    calculator(index);
    });
}


var layoutStructure;
Array.from(productDataOfVan).forEach((data,index)=>{

    var result = `
    
      <div class="col-md-4" style="margin:10px 0px; padding:0px 20px 0px 20px; box-shadow: 15px 15px  10px lightblue;padding:20px" >
      <img src="${data.img}" width="300px" height="200px"  />
        <h3 id="productTitle${index}"  style="color:darkblue">
           ${data.title}
           
        </h3>

         <h4 id="subTitle">
                 ${data.subtitle}
         </h4>

          <h4>
                Quantity: <br><input type="number" id="quantity${index}" value="1">  
                 <button class="mathsigns" id="plus${index}" style="color:white">+</button> &nbsp; &nbsp; &nbsp;<button class="mathsigns" id="minus${index}">-</button>
         </h4>

        <h4>
                <span style="color:blue; font-size: 18px;" > Price: #  <span id="price${index}" data="${data.price}"> ${data.priceWithComma}</span>  </span>  
         </h4>



         <button id="Ordernow${index}" style="color:white; background-color: blue;" price="${data.price}" title="${data.title}" subtitle="${data.subtitle}" quantity="${1}">
         Order now
         </button>
         
    </div>

    `;
 calEventListener(index)
   

    
    if(index > 0){
    layoutStructure = layoutStructure+result;

    }
    else{
    layoutStructure = result;

    }
   
   


});



var  containerHolder = document.getElementById("containerHolder");
containerHolder.innerHTML= layoutStructure;


document.dispatchEvent(evenData);
















var eventMakeBags = "productEventBags";
var evenDataBags =  new Event(eventMakeBags);
function calEventListenerForBag(index){

    
    document.addEventListener(eventMakeBags,e=>{
    calculator(index);
    });
}



var layOutDataForBag ='';
Array.from(productDataOfBag).forEach((data,index)=>{

index = index+100;
  
   var result = `
    
     <div class="col-md-4" style="margin:10px 0px; padding:0px 20px 0px 20px; box-shadow: 15px 15px  10px lightblue;padding:20px" >
      <img src="${data.img}" width="300px" height="200px"  />
         <h1 id="productTitle${index}">
           ${data.title}
           
        </h1>

         <h3 id="subTitle">
                 ${data.subtitle}
         </h3>

          <h4>
                Quantity: <br><input type="number" id="quantity${index}" value="1">  
                 <button class="mathsigns" id="plus${index}" style="color:white">+</button> &nbsp; &nbsp; &nbsp;<button class="mathsigns" id="minus${index}">-</button>
         </h4>

        <h4>
                <span style="color:blue; font-size: 18px;" > Price: #  <span id="price${index}" data="${data.price}"> ${data.priceWithComma}</span>  </span>  
         </h4>



               <button id="Ordernow${index}" style="color:white; background-color: blue;" price="${data.price}" title="${data.title}" subtitle="${data.subtitle}" quantity="${1}">
                Order now
               </button>
         
    </div>


    `;

  calEventListenerForBag(index);

    
    index = index-100;
 
    if(index > 0){
    layOutDataForBag = layOutDataForBag+result;

    }
    else{
    layOutDataForBag = result;

    }
});


var containerHolderbags = document.getElementById("containerHolderbags");

containerHolderbags.innerHTML = layOutDataForBag;

document.dispatchEvent(evenDataBags);

