# @hitv/animate 

# What is in this repository?
A JavaScript implementation of animate.css using the Web Animations API. 

# Quick start
Here's a simple example of an animation that fades and scales a `<div>`.

```html
<!-- Include the polyfill -->
<script src="web-animations.min.js"></script>
<script src="animate.min.js"></script>

<!-- Set up a target to animate -->
<div class="pulse" style="width: 150px;">Hello world!</div>

<!-- Animate! -->
<script>
    import animate from '@hitv/animate'
    const elem = document.querySelector('.pulse');
    const animation = animate(elem, 'breath', {
        direction: 'alternate',
        delay: 1000,
        duration: 500,
        iterations: Infinity,
    }, function(){
      // Do something after animation
    });
</script>
```

# Animations

To animate an element, call the method `animate` with an animate target element add one or a couple of the following animation name:

| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |
| `heartBeat`       |

# Contributing
Pull requests are the way to go here. We only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a pen. That last one is important.

# We love feedback!
For feedback on the API and the specification:

File an issue on Gitlab: http://git.hunantv.com/hitv-modules/animate/issues
Alternatively, send an email to genie88@163.com with subject line "[@hitv/animations] ... message topic ..." (archives).
For issues with the repository, report them on GitHub: http://git.hunantv.com/hitv-modules/animate/issues/new.
