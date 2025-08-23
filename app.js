const heart = document.querySelector(".heart");
const envelopeWrapper = document.querySelector(".envelopeWrapper");
const envelopeClose1 = document.querySelector(".envelopeClose1");

heart.addEventListener("click", () => {
    envelopeWrapper.classList.toggle("flap")
});