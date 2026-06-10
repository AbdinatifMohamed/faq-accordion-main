const buttons = document.querySelectorAll("#plus");

let selectedButton = null;



for (const button of buttons) {
    button.addEventListener("click", (e) => {
        const desc = document.getElementById(button.dataset.desc);
        const img = button.getElementsByTagName("img")[0];
        if (selectedButton != null) {
            const selectedDesc =  document.querySelector(`#${selectedButton.dataset.desc}`);
            const selectedImg = selectedButton.getElementsByTagName("img")[0];

            console.log(selectedDesc);
            
            selectedDesc.classList.remove("opacity-50");
            selectedDesc.classList.add("h-0", "invisible", "opacity-0");
            selectedImg.src = "./assets/images/icon-plus.svg"
        }

        if (selectedButton === button){
            selectedButton = null;
            return;
        }
        

        desc.classList.remove("h-0", "invisible");
        desc.classList.add("opacity-50");
        img.src = "./assets/images/icon-minus.svg";
        selectedButton = button;
    })
}