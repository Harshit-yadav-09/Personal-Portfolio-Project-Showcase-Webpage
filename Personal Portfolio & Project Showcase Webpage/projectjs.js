let add_img_click = document.querySelector("#addpjt");
let Add_form = document.querySelector(".addform");
let bdy = document.querySelector("body");
let makeContainer = document.querySelector('.make');
let addNewSection = document.querySelector('.addnew');

add_img_click.addEventListener("click", function(event) {
    Add_form.style.display = "block";
    bdy.style.opacity = "1";
});

let cross_click = document.querySelector(".formcross");
cross_click.addEventListener("click", function() {
    Add_form.style.display = "none";
    bdy.style.opacity = "1";
});

let reset_click = document.querySelector("#Reset");
let pro_img = document.getElementById("addprojectimage");
let pro_title = document.getElementById("addtitle");
let pro_sht_dsr = document.getElementById("addshrtdscr");
let pro_lng_dsr = document.getElementById("adddetails");
let pro_stat = document.querySelectorAll(".stat-items");

reset_click.addEventListener("click", function() {
    pro_lng_dsr.value = "";
    pro_img.value = "";
    pro_sht_dsr.value = "";
    pro_title.value = "";
    pro_stat.forEach(item => item.checked = false);   
});

reset_click.addEventListener("mousedown", function() {
    reset_click.style.color  = "white";
    reset_click.style.backgroundColor  = "green";
});

reset_click.addEventListener("mouseup", function() {
    reset_click.style.color  = "wheat";
    reset_click.style.backgroundColor  = "red";
});

let pro_submit = document.getElementById("addproject");

pro_submit.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a FileReader to read the image file
    let fileReader = new FileReader();
    let file = pro_img.files[0];

    fileReader.onload = function(e) {
        let pro_img_value = e.target.result;
        let pro_title_value = pro_title.value;
        let pro_sht_dsr_value = pro_sht_dsr.value;
        let pro_lng_dsr_value = pro_lng_dsr.value;
        let pro_stat_value;

        // Find the selected status
        pro_stat.forEach(item => {
            if (item.checked) {
                pro_stat_value = item.value;
            }
        });

        
        createProjectCard(pro_img_value, pro_title_value, pro_sht_dsr_value, pro_lng_dsr_value, pro_stat_value);

        // Clear the form inputs
        resetFormInputs();

        // Hide the form
        Add_form.style.display = "none";
        bdy.style.opacity = "1";
    };

    // Read the image file as a Data URL
    if (file) {
        fileReader.readAsDataURL(file);
    } else {
        alert("Please select an image.");
    }
});

let idNum = 0;

function createProjectCard(imgSrc, title, shortDesc, longDesc, status) {
    idNum++;
    const newProjectDiv = document.createElement('div');
    newProjectDiv.id = `card${idNum}`;
    newProjectDiv.className = 'projects';
    newProjectDiv.innerHTML = `
        <img src="${imgSrc}" alt="Project Image" class="projectimg">
        <h4 class="pronme">${title}</h4>
        <h6 class="shr-dcr">${shortDesc}</h6>
        <p class="dscr">${longDesc}</p>
        <p class="status">${status}</p>
    `;
    makeContainer.insertBefore(newProjectDiv, addNewSection);

    
    newProjectDiv.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup(newProjectDiv);
    });
}

function resetFormInputs() {
    pro_img.value = "";
    pro_title.value = "";
    pro_sht_dsr.value = "";
    pro_lng_dsr.value = "";
    pro_stat.forEach(item => item.checked = false);
}

let shw_popup = document.querySelector(".popup");
let popcross = document.querySelector(".cross");

// Add click event listener to the existing project cards
document.querySelectorAll('.projects').forEach(projectDiv => {
    projectDiv.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup(projectDiv);
    });
});

function showPopup(projectDiv) {
    let popupImgSrc = projectDiv.querySelector(".projectimg").src;
    let popProNme = projectDiv.querySelector(".pronme").textContent;
    let popProSdri = projectDiv.querySelector(".shr-dcr").textContent;
    let popProLdri = projectDiv.querySelector(".dscr").textContent;
    let popProSts = projectDiv.querySelector(".status").textContent;

    shw_popup.querySelector('.popimg').src = popupImgSrc;
    shw_popup.querySelector('.poph4').textContent = popProNme;
    shw_popup.querySelector('.pop-sd').textContent = popProSdri;
    shw_popup.querySelector('.det').textContent = popProLdri;
    shw_popup.querySelector('.pop-sts').textContent = popProSts;

    shw_popup.style.display = 'block';
}

popcross.addEventListener('click', function() {
    shw_popup.style.display = 'none';  
      
});



