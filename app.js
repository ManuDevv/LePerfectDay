
       /*     TweenMax.from(".nav", 2, {
                delay: 3,
                opacity: 0,
                y: -60,
                ease: Expo.easeInOut
          })
          TweenMax.from(".social", 2, {
                delay: 1.5,
                opacity: 0,
                y: 360,
                ease: Expo.easeInOut
          })
          TweenMax.from("h1", 2, {
                delay: 0.5,
                opacity: 0,
                x: 360,
                ease: Expo.easeInOut
          })*/

/*animation des box*/

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box1',reverse:false
    


})
.setClassToggle('.box1', 'fade-in')

.addTo(controller);


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box2',reverse: false
    


})
.setClassToggle('.box2', 'fade-in')

.addTo(controller);


/*animation du texte */

const txtAnim = document.querySelector('#text1');
new Typewriter(txtAnim,{

      autoStart: true,
      loop:true
      
})

.typeString('Découvrez notre carte du monde')
.pauseFor(300)
.deleteChars(8)
.typeString('bancaire')
.pauseFor(300)
.deleteChars(8)
.typeString('des vins')
.pauseFor(300)

.deleteChars(4)
.typeString('bières !')
.pauseFor(5000)
.start()