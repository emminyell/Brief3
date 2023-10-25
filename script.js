
        // -------burger menu-------//
let btnSvg = document.querySelector("#burgerMenu");
        let menuItems = document.querySelector("#show-items-respon");
        let ulUppanded = document.querySelector("#ul-appended");
        btnSvg.addEventListener("click",function(){ 
            if (menuItems.style.display === 'none' || menuItems.style.display === '') {
            menuItems.style.display ='block';
        } else {
            menuItems.style.display = 'none';
        }
        })
        window.addEventListener("resize", function(){
            if (window.innerWidth >= 769) {
            menuItems.style.display = 'none';
            }
        });
        
         // -------Remove-------//
        let total = document.querySelector("#btn-total")
        let deleteButtons = document.querySelectorAll(".supression");
        let ana = document.getElementsByClassName("product")
        let q=20;
        deleteButtons.forEach(function (delet) {
            delet.addEventListener("click", function () {
                let product = delet.parentElement.parentElement;
                product.parentElement.style.display = "none"
                total.value = Number(total.value) - (Number(num.value) * q);
                console.log(Number(total.value));
            });
        });
         // -------incrementation et decrementation-------//
        let btnplus = document.querySelectorAll(".quantity-increment");
        let btnmoin = document.querySelectorAll(".quantity-decrement");
        let num = document.querySelectorAll(".quantity");
        for (let i = 0; i < num.length; i++) {
            btnplus[i].addEventListener("click", function () {
                num[i].value++;
                total.value = Number(total.value) + 20;
            })
            btnmoin[i].addEventListener("click", function () {
                if (num[i].value > 1) {
                    num[i].value--;
                    total.value = Number(total.value) - 20;
                }
            });
        }