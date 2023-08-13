gsap.registerPlugin(ScrollTrigger);


function initNavigation(){
    const mainNavLink = gsap.utils.toArray('.main-nav a');
    const mainNavLinkRev = gsap.utils.toArray('.main-nav a').reverse();

    mainNavLink.forEach(link => {
        link.addEventListener('mouseleave', e => {
            //add class
            link.classList.add('animate-out');
            setTimeout(()=>{
                //remove class
                link.classList.remove('animate-out');
            },300);
        })
    });

    function navAnimation(direction){
        //console.log(direction);
        const scrollingDown = direction === 1;
        const links = scrollingDown ? mainNavLink : mainNavLinkRev;
        return gsap.to(links, {
            duration:0.3,
            stagger: 0.05,
            autoAlpha: () => scrollingDown ? 0 : 1,
            y: () => scrollingDown ? 20 : 0,
            ease: 'power4.out',
        })
    }

    ScrollTrigger.create({
        start: 100,
        end: 'bottom bottom-=20',
        toggleClass:{
            targets: 'body',
            className:'has-scrolled'
        },
        onEnter:({direction}) => navAnimation(direction),
        onLeaveBack: ({direction}) => navAnimation(direction),
        markers: true
    });
}


function init(){
    
    // start here
    initNavigation();

}

window.addEventListener('load', function(){
    init();
});
