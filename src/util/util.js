export const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const rangeGenerator = (max, min) =>{
    return (Math.floor(Math.random() * (max - min)) + min).toString()+"%";
}

export const isNightTime = () => {
    var currentTime = new Date();
    let hours = currentTime.getHours();
    //  between 6 ~ 17   6:00am ~ 5:00pm lightMode is ON
    return !(hours > 6 && hours <= 17);
};

// return true if scroll more than one window height
export const checkscroll = () => {
    window.addEventListener("scroll", (e) => {
        let pageHeight = window.innerHeight
        let currentHeight = window.scrollY;
        return currentHeight >= pageHeight
    });
};

export const freezeBody = (freeze=false) =>{
    document.body.style.overflowY = !freeze ? 'hidden' : 'scroll';
}