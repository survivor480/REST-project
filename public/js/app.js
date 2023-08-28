function toggleDiv() {
    var div2 = document.getElementsByClassName("div2")[0];
    div2.classList.toggle("hidden");
}

let defaultDarkModeStatus = true;

const darkmode_button = document.getElementById("darkmode-button");

const extreme_dark_black = 'rgba(0, 0, 0, 1)';
const just_dark_black = 'rgba(15, 15, 15, 1)';
const ligh_black = 'rgba(26, 26, 26, 1)';
const extreme_deep_white = 'rgba(255, 255, 255, 1)';
const deep_white = 'rgba(241, 241, 241, 1)';
const light_white = 'rgba(215, 215, 215, 1)';




// Side bar button functions as of now

const darkModeToggle = () => {
    let body = document.body;
    let sidebar_buttons = document.getElementsByClassName("sidebar-buttons");
    // let collections_button = document.getElementById("collections-button");
    // let environment_button = document.getElementById("environment-button");
    // let history_button = document.getElementById("history-button");
    // let darkmode_button = document.getElementById("darkmode-button");
    // let support_button = document.getElementById("support-button");
    // let user_button = document.getElementById("user-button");

    let collections_image = document.getElementById("sidebar-item-collections");
    let environment_image = document.getElementById("sidebar-item-environments");
    let history_image = document.getElementById("sidebar-item-history");
    let darkmodeimage = document.getElementById("sidebar-item-darkmode");
    let supportimage = document.getElementById("sidebar-item-support");
    let userimage = document.getElementById("sidebar-item-user_login");


    let collections_text = document.getElementById("collections-text");
    let environment_text = document.getElementById("environment-text");
    let history_text = document.getElementById("history-text");
    let darkmode_text = document.getElementById("darkmode-text");
    let support_text = document.getElementById("support-text");
    let user_text = document.getElementById("user_button-text");

    let requests_bar = document.getElementById("requests-bar");
    let individual_tabs = document.getElementsByClassName("individual-tab");
    let close_buttons_image = document.getElementsByClassName("close-button-img");

    let collections_bar = document.getElementById("collections-bar");
    let resizer = document.getElementById("resizer");
    let main_bar = document.getElementById("main");

    let user_login_modal = document.getElementById("user-login-modal");

    defaultDarkModeStatus = !defaultDarkModeStatus;

    if(defaultDarkModeStatus === true){
        body.classList.toggle('dark-mode');
        for(let i=0; i<sidebar_buttons.length; i++){
            sidebar_buttons[i].style.background = just_dark_black;
        }

        for(let i=0; i<individual_tabs.length; i++){
            individual_tabs[i].style.background = just_dark_black;
        }

        for(let i=0; i<close_buttons_image[i].length; i++){
            close_buttons_image[i].src = "./public/images/close-dark.png";
        }


        collections_image.src = "./public/images/collections-dark.png";
        environment_image.src = "./public/images/environment-dark.png";
        history_image.src = "./public/images/history-dark.png";
        darkmodeimage.src = "./public/images/dark-mode-dark.png";
        supportimage.src = "./public/images/support-dark.png";
        userimage.src = "./public/images/user-dark.png";

        user_login_modal.style.background = just_dark_black;


        collections_text.style.color = extreme_deep_white;
        environment_text.style.color = extreme_deep_white;
        history_text.style.color = extreme_deep_white;
        darkmode_text.style.color = extreme_deep_white;
        support_text.style.color = extreme_deep_white;
        user_text.style.color = extreme_deep_white;

        darkmode_text.innerHTML = "Light Mode"

        collections_bar.style.background = just_dark_black;
        resizer.style.background = extreme_dark_black;
        main_bar.style.background = just_dark_black;
        requests_bar.style.background = just_dark_black;
    }
    else {
        body.classList.toggle('dark-mode');
        for(let i=0; i<sidebar_buttons.length; i++){
            sidebar_buttons[i].style.background = light_white;
        }

        for(let i=0; i<individual_tabs.length; i++){
            individual_tabs[i].style.background = light_white;
        }

        for(let i=0; i<close_buttons_image[i].length; i++){
            close_buttons_image[i].src = "./public/images/close.png";
        }
        
        collections_image.src = "./public/images/collections.png";
        environment_image.src = "./public/images/environment.png";
        history_image.src = "./public/images/history.png";
        darkmodeimage.src = "./public/images/dark-mode.png";
        supportimage.src = "./public/images/support.png";
        userimage.src = "./public/images/user.png";

        collections_text.style.color = just_dark_black;
        environment_text.style.color = just_dark_black;
        history_text.style.color = just_dark_black;
        darkmode_text.style.color = just_dark_black;
        support_text.style.color = just_dark_black;
        user_text.style.color = just_dark_black;

        darkmode_text.innerHTML = "Dark Mode";

        collections_bar.style.background = extreme_deep_white;
        resizer.style.background = deep_white;
        main_bar.style.background = extreme_deep_white;
        requests_bar.style.background = extreme_deep_white;
    }
}

darkmode_button.addEventListener('click', darkModeToggle);



// Ends with a dark mode function





// Resizer logic
const resizer = document.querySelector("#resizer");
const collections_bar = document.querySelector("#collections-bar");

resizer.addEventListener("mousedown", (event) => {
document.addEventListener("mousemove", resize, false);
document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", resize, false);
}, false);
});

let sidebar = document.getElementById("sidebar");

function resize(e) {
    const minWidth = 200;
    const maxWidth = 500;
    let actualsize = e.x - sidebar.offsetWidth;

    if(actualsize < minWidth) {
        actualsize= minWidth;
    }
    if(actualsize > maxWidth) {
        actualsize = maxWidth;
    }

    const size = `${actualsize}px`;
    
    collections_bar.style.flexBasis = size;
}


// resizer logic

