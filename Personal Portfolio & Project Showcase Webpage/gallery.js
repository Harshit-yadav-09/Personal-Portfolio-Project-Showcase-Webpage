let add_img = document.querySelector(".add");
let disp_frm = document.querySelector(".addfrm");
let cls_frm = document.querySelector(".clsfrm")

add_img.addEventListener("click",function(event){
    disp_frm.style.display = "block";
});

cls_frm.addEventListener("click",function(){
    disp_frm.style.display = "none";
});


let upd_img = document.querySelector(".upload");
let img = document.querySelector(".selimg");
let smll_img = document.querySelector(".smlimg");
let shw_img = document.querySelector(".showimg")

upd_img.addEventListener("click",function(event){
   event.preventDefault;
     let img_src = img.value; 
     console.dir(img_src);

});

