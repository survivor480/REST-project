const first_second_resizer = document.getElementById("results-first-second-resizer");
const second_third_resiser = document.getElementById("results-second-third-resizer");


let results_container = document.getElementById('results-container');
let code_section = document.getElementById('code-section');
let response_container = document.getElementById('response-container');

let resize_first_second_container = (e) => {
    const minWidth = 200;
    const maxWidth = 700;
    
    let actualsize = e.x - sidebar.offsetWidth - collections_bar.offsetWidth;
    let totalValue = results_container.offsetWidth + code_section.offsetWidth;

    if(actualsize < minWidth){
        actualsize = minWidth;
    }
    if(actualsize > maxWidth){
        actualsize = maxWidth;
    }
    const size = `${actualsize}px`;
    const second_container_size = `${totalValue - actualsize}px`;

    results_container.style.flexBasis = size;
    code_section.style.flexBasis = second_container_size;
    // response_container.style.flexBasis = response_flex_basis;
}


first_second_resizer.addEventListener('mousedown' , (event) => {
    response_container.style.flexShrink = 0;
    response_container.style.flexGrow = 0;
    document.addEventListener("mousemove", resize_first_second_container, false);
    document.addEventListener("mouseup" , (event) => {
        document.removeEventListener("mousemove", resize_first_second_container, false);
    }, false);
}, false)



let resize_second_third_container = (e) => {
    const minWidth = 200;
    const maxWidth = 700;

    let actualsize = e.x - sidebar.offsetWidth - collections_bar.offsetWidth - results_container.offsetWidth;
    let totalValue = code_section.offsetWidth + code_section.offsetHeight;

    if(actualsize < minWidth) {
        actualsize = minWidth;
    }
    if(actualsize > maxWidth) {
        actualsize = maxWidth;
    }

    const size = `${actualsize}px`;
    const third_container_size = `${totalValue - size}px`;
    
    code_section.style.flexBasis = size;
    response_container.style.flexBasis = third_container_size;
}


second_third_resiser.addEventListener('mousedown' , (event) => {
    results_container.style.flexShrink = 0;
    results_container.style.flexGrow = 0;
    document.addEventListener("mousemove", resize_second_third_container, false);
    document.addEventListener("mouseup" , (event) => {
        document.removeEventListener("mousemove", resize_second_third_container, false);
    }, false);
}, false)


