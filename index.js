//template_ke7xhj6
//service_otffzmj
//public id: vFsFOvA8uoO6WA_Id

const contact = function(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible" 
    emailjs.sendForm('service_otffzmj','template_ke7xhj6',event.target,'vFsFOvA8uoO6WA_Id').then(()=>{
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible" 
    }).catch(()=>{
        loading.classList.remove("modal__overlay--visible");
        alert("the email service is temporarily unavailable. please contact me directly on gurramdhanush21@gmail.com"); 
    })
}

let isModalOpen = false;
const togglemodal = function(){
    if(isModalOpen){
        isModalOpen=false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

let contrastToggle = false;

const toggleContrast = function(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }else{
        document.body.classList.remove("dark-theme")
    }
    
}

const scaleFactor = 1/20
const moveBackground = function(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for(let i = 0 ; i< shapes.length; i++){
        const isOdd = i %2 !== 0;
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt }px,${y * boolInt }px)`
    }
}