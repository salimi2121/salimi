
const animatedDivs = document.querySelectorAll('.animate-in');  
let animationExecuted = Array(animatedDivs.length).fill(false); // آرایه برای کنترل وضعیت انیمیشن  

window.addEventListener('scroll', function () {  
    animatedDivs.forEach((div, index) => {  
        if (window.scrollY > (1 + (index * 2)) && !animationExecuted[index]) {  
            div.classList.add('animate-show');  
            animationExecuted[index] = true; // تنظیم فلگ برای جلوگیری از اجرای مجدد  
        }  
    });  
});  

// اجرای انیمیشن بعد از بارگذاری صفحه  
window.onload = function () {  
    animatedDivs.forEach((div) => {  
        div.classList.add('animate-show');  
    });  
};  