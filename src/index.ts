/// <reference path="../types/globals.d.ts" />
/// <reference path="../types/declarations.d.ts" />

/**
 * A JavaScript implementation of animate.css using the Web Animations API.
 * To animate an element, call the method `animate` with an animate target element
 * add one animations.
 * eg.
 * const elem = document.querySelector('.pulse');
 * const animation = animate(elem, 'breath');
 *
 * @author genie88 (genie88@163.com)
 * MIT Licensed
 */
import animates from './animates';
function animate(elem: any, ani: any = {}) {
  const animate = (typeof ani === 'string') ? animates[ani] : ani;
  let player;
  if (animate) {
    try {
      player = elem.animate(animate.ani, animate.opts);
      return player;
    } catch (e) {
      console.error(e + 'animate: ' + ani);
      return player;
    }
  }
}

export default animate;
