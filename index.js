const articleAnimation = document.querySelector(".article-animation");

articleAnimation.addEventListener('mouseenter', () => {
    articleAnimation.style.border = "6px dashed white";
    articleAnimation.style.backgroundColor = "rgba(67, 67, 242, 0.351)";
    articleAnimation.style.borderRadius = "50px";
});

articleAnimation.addEventListener('mouseout', () => {
    articleAnimation.style.border = "none";
    articleAnimation.style.backgroundColor = "none";
    articleAnimation.style.borderRadius = "0px";
});