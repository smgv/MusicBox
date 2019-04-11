window.addEventListener('load', () => {
    const sound = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    console.log(pads);
    console.log(sound);

    const colors = [
        "#0dc53bd3",
        '#0f76ec',
        '#eea010e1',
        '#0e0ed1e5',
        '#d87093',
        '#ff0000'
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sound[index].play();
            sound[index].currentTime = 0;
            console.log(sound[index]);
            createBubbles(index);
        });
    });

    

    const createBubbles = (index) =>  {
        const bubbles = document.createElement('div');
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 2s ease';
        bubbles.addEventListener('animationend', function() {
        visual.removeChild(this);
        });
    }
});