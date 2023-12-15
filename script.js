/*Счет*/
const button = document.querySelector(".btn");
button.addEventListener('click',calculateAmount);

const btnTip = document.querySelector('.addTip');
btnTip.addEventListener('click',showTip);

function showTip(e) {
    e.preventDefault();
    const tip = document.querySelector(".tip");
    tip.style.display = 'block';
}

function calculateAmount (e){
    e.preventDefault();
const bill = document.querySelector(".bill").value;
const people = document.querySelector('.people').value;
const tip = document.querySelector(".tip").value;

if (bill === "" ||  people === ""){
    Swal.fire({
        icon: 'Ошибка!',
        text: "Проверьте заполнены ли строки Счет и Количество гостей",
      })
}
let amountPerPerson = bill/people;

let tipPerPerson = (bill*tip)/people;
let commonSumPerPerson = amountPerPerson + tipPerPerson;

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
commonSumPerPerson = commonSumPerPerson.toFixed(2);

document.querySelector('.devidedBill').textContent = amountPerPerson;
document.querySelector('.devidedTIp').textContent = tipPerPerson;
document.querySelector('.billAndTip').textContent = commonSumPerPerson;

}
/*слайды */
  const pic = [
    "sliders/1.jpg",
    "sliders/3.jpg",
    "sliders/5.jpg",
    "sliders/7.jpg",
    "sliders/9.jpg",
    "sliders/11.jpg",
  ]
  const pic2 = [
    "sliders/2.jpg",
    "sliders/4.jpg",
    "sliders/6.jpg",
    "sliders/8.jpg",
    "sliders/10.jpg",
    "sliders/12.jpg",
  ]
  let i = 0;
  const next = document.querySelector(".next");
  const back = document.querySelector(".back");

  next.addEventListener("click",()=>{
    i++;
    if ( i > pic.lenght-1) {
    i = 0;
    }
    if ( i > pic2.length-1){
    i = 0;
   }
   document.querySelector(".sliderOne").src = pic[i];
   document.querySelector(".sliderTwo").src = pic2[i] ;
   gsap.from(".sliderTwo",{
    x:-820,
    opacity:0,
    duration:2,
  })
  
   gsap.from(".sliderOne",{
    x:-520,
    opacity:0,
    duration:2,
    delay:1,
  })
  })

   back.addEventListener("click", ()=>{
    i--;
    if (i < 0){
        i = pic.length - 1;
    }
    if (i < 0){
        i = pic.length - 1;
    }
    document.querySelector(".sliderOne").src = pic[i];
    document.querySelector(".sliderTwo").src = pic2[i];
    gsap.from(".sliderOne",{
      x:820,
      opacity:0,
      duration:2,
    })
    
     gsap.from(".sliderTwo",{
      x:520,
      opacity:0,
      duration:2,
      delay:1,
    })
  })

  /*Форма бронирования*/
  const tableRes = document.querySelector("#tableRes");
  tableRes.addEventListener("click",()=>{
    gsap.to(".reserve",{
      opacity:1,
      duration:2,
      y:-50,
      })
  })
  const btnClose = document.querySelector(".btn-close");
  btnClose.addEventListener("click",()=>{
      document.location.reload();
  })

  const btnSendReseve = document.querySelector(".send");

  const userName = document.querySelector(".name");
  userName.addEventListener("keyup", function(){
    this.value = this.value.replace(/['0-9',':']/, "");
});
  
  btnSendReseve.addEventListener("click",()=>{
    const userName = document.querySelector(".name");
    const userNumber= document.querySelector(".phone");
    
    let userDate = document.querySelector(".date").value;
    userDate = Date.parse(userDate);
    let now =  new Date();
    now = Date.parse(now);
    let x = new Date (NaN)

  
    if (userName.value === ""){
      Swal.fire({
        position: 'center',
        background:"black",
        title: 'Введите ФИО!',
        showConfirmButton: false,
        timer: 2500
      });
    }
    else if(userNumber.value === "" ){
        Swal.fire({
            position: 'center',
            background:"black",
            title: 'Введите номер!',
            showConfirmButton: false,
            timer: 2500
          });
    } 
    else if(isNaN(userNumber.value) && userNumber.value.length > 0 ){
        Swal.fire({
            position: 'center',
            background:"black",
            title: 'Введите номер без букв !',
            showConfirmButton: false,
            timer: 2500
          });
    }
    else if(userNumber.value.length <= 10 || userNumber.value.length > 11){
        Swal.fire({
            position: 'center',
            background:"black",
            title: 'Проверьте номер!',
            showConfirmButton: false,
            timer: 2500
          });
    }
   
    else if (isNaN(userDate)){
      Swal.fire({
        position: 'center',
        background:"black",
        title: 'Выберите дату!',
        showConfirmButton: false,
        timer: 3000
      });
    }
    else if(userDate < now){
      Swal.fire({
        position: 'center',
        background:"black",
        title: 'Выберите другую дату!',
        showConfirmButton: false,
        timer: 3000
      });
    }
    else{
      Swal.fire({
        position: 'center',
        background:"black",
        title: "Благодарим за заказ. Администратор ресторана свяжется с Вами в течение 10 минут",
        showConfirmButton: false,
        timer: 2500
      });
      document.location.reload();
    }

})
/*Счет*/
const clientBill = document.querySelector(".calculate");
clientBill.addEventListener("click", ()=>{
  const password = "123";
  let question = prompt("Введите пароль администратора");
  if (question === password){
    document.querySelector(".containerTwo").style.display = "block";
    document.querySelector(".container-admin").style.display = "block";
  }
  else{
    alert("В доступе отказано");
    document.querySelector(".containerTwo").style.display = "none";
    document.querySelector(".container-admin").style.display = "none";
  }
})
