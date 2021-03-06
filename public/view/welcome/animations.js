(function() {
  define(function() {
    return {
      first: function(instance, done) {
        var animate, params;
        params = {
          opacity: 0,
          scaleX: 0,
          scaleY: 0
        };
        animate = new TimelineMax({
          paused: true,
          onUpdate: function() {
            return instance.$el.css({
              opacity: params.opacity,
              transform: "scaleX(" + params.scaleX + ") scaleY(" + params.scaleY + ")"
            });
          },
          onComplete: function() {
            return done();
          }
        });
        animate.to(params, 0.6, {
          ease: Power2.easeOut,
          opacity: 1,
          scaleX: 1,
          scaleY: 1
        });
        return animate.play();
      },
      last: function(instance, done) {
        var animate, params;
        params = {
          opacity: 1,
          rotateX: 0,
          translateY: 0,
          translateZ: 0
        };
        instance.$el.css({
          "transformOrigin": "0% -100%"
        });
        animate = new TimelineMax({
          paused: true,
          onUpdate: function() {
            return instance.$el.css({
              opacity: params.opacity,
              transform: "translateY(" + params.translateY + "px) translateZ(" + params.translateZ + "px) rotateX(" + params.rotateX + "deg)"
            });
          },
          onComplete: function() {
            return done();
          }
        });
        animate.to(params, 0.6, {
          opacity: 0,
          rotateX: 30,
          translateY: 0,
          translateZ: -300
        });
        return animate.play();
      }
    };
  });

}).call(this);
