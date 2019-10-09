

//TweenMax.staggerTo(['#logo1','#logo2','#logo3'], 1,{y:500, ease: Bounce.easeOut }, 0.25)

var masterTL = new TimelineMax();


masterTL.to('#logo1',1,{x:'850'})
        .to('#logo2',1,{y:'+=850'},'-=0.5')
        .to('#logo3',1,{x:'-=850'},'-=0.5');

//return to initial position after the first finishes

masterTL.to('#logo1',1,{x:'-=850'},'-=0.5')
         .to('#logo2',1,{y:'-=850'})
          .to('#logo3',1,{x:'+=850'});
