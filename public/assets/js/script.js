window.onload = function () {

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    var slides = document.querySelectorAll("section.panel");

    for (var i=0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
        .setPin(slides[i])
        // .addIndicators()
        .addTo(controller);
    }


};
