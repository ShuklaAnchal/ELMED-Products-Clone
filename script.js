

document.addEventListener("DOMContentLoaded", function () {
    const counts = document.querySelectorAll('.count')
const speed = 15

    function myFunction() {
      console.log("Function triggered!");
      counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 30)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
    }
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#fivthPage", 
      start: "top center", 
      onEnter: myFunction,
      once: true, 
    });
  });


function pageOneAnimation(){
  var tl = gsap.timeline({
    scrollTrigger :{
        trigger: "#secondPage",
        start:"top top",
        scrub:1,

    }
})

tl.to("#arrow",{
   opacity:1,
   ease:Power1
})
}

pageOneAnimation();

function clickAndScroll() {
   

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Open the first page (You may replace this with your specific logic)
    window.location.href = '#firstPage.html';
}