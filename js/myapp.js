 function addMeal(){
     let mealForm=document.getElementById("meals_form");
     let mealTable=document.getElementById("meals_table");
     let addMealbtn=document.getElementById("addMealBtn");


     if(mealForm.style.display=="none"){
         mealForm.style.display="block";
         mealTable.style.display="none";
         addMealbtn.innerHTML="Go Back";
     }else if(mealTable.style.display="none"){
         mealTable.style.display="block";
         mealForm.style.display="none";
         addMealbtn.innerHTML="Add A Meal";
     }
 }

 function addMenu(){
    let menuForm=document.getElementById("menu_form");
    let todayMenu=document.getElementById("todayMenu");
    let addMenubtn=document.getElementById("addMenuBtn");


    if(menuForm.style.display=="none"){
        menuForm.style.display="block";
        todayMenu.style.display="none";
        addMenubtn.innerHTML="Go Back";
    }else if(todayMenu.style.display="none"){
        todayMenu.style.display="block";
        menuForm.style.display="none";
        addMenubtn.innerHTML="Add Menu";
    }
}

function summaries(){
    let tranSummary=document.getElementById("tranSummary");
    let transDetails=document.getElementById("transDetails");
    let btnReport=document.getElementById("btnReport");


    if(tranSummary.style.display=="none"){
        tranSummary.style.display="block";
        transDetails.style.display="none";
        btnReport.innerHTML="Go Back";
    }else if(transDetails.style.display="none"){
        transDetails.style.display="block";
        tranSummary.style.display="none";
        btnReport.innerHTML="Daily Summaries";
    }
}