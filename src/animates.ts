const defaultOpts = {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity
};

const animates: any = {
  bounce: {
    ani: {
      transform: ['scale(0.5)', 'scale(1)']
    },
    opts: defaultOpts
  },
  flash: {
    ani: {
      opacity: [1, 0, 1, 0, 1]
    },
    opts: defaultOpts
  },
  pulse: {
    ani: {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)']
    },
    opts: defaultOpts
  },
  rubberBand: {
    ani: {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)']
    },
    opts: defaultOpts
  },
  shake: {
    ani: {
      transform: [
        'translate3d(0, 0, 0)', // from
        'translate3d(-10px, 0, 0)', // 1
        'translate3d(10px, 0, 0)', // 2
        'translate3d(-10px, 0, 0)', // 3
        'translate3d(10px, 0, 0)', // 4
        'translate3d(-10px, 0, 0)', // 5
        'translate3d(10px, 0, 0)', // 6
        'translate3d(-10px, 0, 0)', // 7
        'translate3d(10px, 0, 0)', // 8
        'translate3d(-10px, 0, 0)', // 9
        'translate3d(0, 0, 0)' // to
      ]
    },
    opts: defaultOpts
  },
  headShake: {
    ani: {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)']
    },
    opts: defaultOpts
  },
  swing: {
    ani: {
      transform: [
        'rotate3d(0, 0, 1, 15deg)',
        'rotate3d(0, 0, 1, -10deg)',
        'rotate3d(0, 0, 1, 5deg)',
        'rotate3d(0, 0, 1, -5deg)',
        'rotate3d(0, 0, 1, 0deg)'
      ]
    },
    opts: defaultOpts
  },
  tada: {
    ani: {
      transform: [
        'scale3d(1, 1, 1)', // 0
        'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', // 1
        'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', // 2
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', // 3
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', // 4
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', // 5
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', // 6
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', // 7
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', // 8
        'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', // 9
        'scale3d(1, 1, 1)'
      ]
    },
    opts: defaultOpts
  },
  wobble: {
    ani: [
      {
        offset: 0,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.15,
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'
      },
      {
        offset: 0.3,
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'
      },
      {
        offset: 0.45,
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'
      },
      {
        offset: 0.6,
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'
      },
      {
        offset: 0.75,
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'
      },
      {
        offset: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: defaultOpts
  },
  jello: {
    ani: [
      {
        offset: 0,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.11,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.22,
        transform: 'skewX(-12.5deg) skewY(-12.5deg)'
      },
      {
        offset: 0.33,
        transform: 'skewX(6.25deg) skewY(6.25deg)'
      },
      {
        offset: 0.44,
        transform: 'skewX(-3.125deg) skewY(-3.125deg)'
      },
      {
        offset: 0.55,
        transform: 'skewX(1.5625deg) skewY(1.5625deg)'
      },
      {
        offset: 0.66,
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
      },
      {
        offset: 0.77,
        transform: 'skewX(0.390625deg) skewY(0.390625deg)'
      },
      {
        offset: 0.88,
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
      },
      {
        offset: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: defaultOpts
  },
  bounceIn: {
    ani: {
      transform: [
        'scale3d(0.3, 0.3, 0.3)', // 0
        'scale3d(1.1, 1.1, 1.1)', // 2
        'scale3d(0.9, 0.9, 0.9)', // 4
        'scale3d(1.03, 1.03, 1.03)', // 6
        'scale3d(0.97, 0.97, 0.97)', // 8
        'scale3d(1, 1, 1)' // 10
      ]
    },
    opts: defaultOpts
  },
  bounceInDown: {
    ani: [
      {
        opacity: 0,
        transform: 'translate3d(0, -3000px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 25px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.6
      },
      {
        opacity: 1,
        transform: 'translate3d(0, -10px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.75
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 5px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.9
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 1
      }
    ],
    opts: { duration: 500 }
  },
  bounceInUp: {
    ani: [
      {
        opacity: 0,
        transform: 'translate3d(0, 3000px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0
      },
      {
        opacity: 1,
        transform: 'translate3d(0, -25px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.6
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 10px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.75
      },
      {
        opacity: 1,
        transform: 'translate3d(0, -5px, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.9
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 1
      }
    ],
    opts: { duration: 500 }
  },
  bounceInLeft: {
    ani: [
      {
        opacity: 0,
        transform: 'translate3d(-3000px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0
      },
      {
        opacity: 1,
        transform: 'translate3d(25px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.6
      },
      {
        opacity: 1,
        transform: 'translate3d(-10px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.75
      },
      {
        opacity: 1,
        transform: 'translate3d(5px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.9
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 1
      }
    ],
    opts: { duration: 500 }
  },
  bounceInRight: {
    ani: [
      {
        opacity: 0,
        transform: 'translate3d(3000px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0
      },
      {
        opacity: 1,
        transform: 'translate3d(-25px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.6
      },
      {
        opacity: 1,
        transform: 'translate3d(10px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.75
      },
      {
        opacity: 1,
        transform: 'translate3d(-5px, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.9
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 1
      }
    ],
    opts: { duration: 500 }
  },
  bounceOut: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'scale3d(0.9, 0.9, 0.9)'
      },
      {
        offset: 0.5,
        opacity: 1,
        transform: 'scale3d(1.1, 1.1, 1.1)'
      },
      {
        offset: 0.55,
        opacity: 1,
        transform: 'scale3d(1.1, 1.1, 1.1)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'scale3d(0.3, 0.3, 0.3)'
      }
    ],
    opts: { duration: 500 }
  },
  bounceOutDown: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.2,
        opacity: 1,
        transform: 'translate3d(0, 10px, 0)'
      },
      {
        offset: 0.4,
        opacity: 1,
        transform: 'translate3d(0, -20px, 0)'
      },
      {
        offset: 0.45,
        opacity: 1,
        transform: 'translate3d(0, -20px, 0)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'translate3d(0, 2000px, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  bounceOutLeft: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.2,
        opacity: 1,
        transform: 'translate3d(20px, 0, 0)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'translate3d(-2000px, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  bounceOutRight: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.2,
        opacity: 1,
        transform: 'translate3d(-20px, 0, 0)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'translate3d(2000px, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  bounceOutUp: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        offset: 0.2,
        opacity: 1,
        transform: 'translate3d(0, -10px, 0)'
      },
      {
        offset: 0.4,
        opacity: 1,
        transform: 'translate3d(0, 20px, 0)'
      },
      {
        offset: 0.45,
        opacity: 1,
        transform: 'translate3d(0, 20px, 0)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'translate3d(0, -2000px, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  fadeIn: {
    ani: {
      opacity: [0, 1]
    },
    opts: { duration: 500 }
  },
  fadeInDown: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(0, -100%, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInDownBig: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(0, -2000px, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInLeft: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(-100%, 0, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInLeftBig: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(-2000px, 0, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInRight: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(100%, 0, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInRightBig: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(2000px, 0, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInUp: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(0, 100%, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeInUpBig: {
    ani: {
      opacity: [0, 1],
      transform: ['translate3d(0, 2000px, 0)', 'translate3d(0, 0, 0)']
    },
    opts: { duration: 500 }
  },
  fadeOut: {
    ani: {
      opacity: [1, 0]
    },
    opts: { duration: 500 }
  },
  fadeOutDown: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  fadeOutDownBig: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(0, 2000px, 0)'
      }
    ],
    opts: { duration: 1000 }
  },
  fadeOutLeft: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  fadeOutLeftBig: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(-2000px, 0, 0)'
      }
    ],
    opts: { duration: 1000 }
  },
  fadeOutRight: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  fadeOutRightBig: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(2000px, 0, 0)'
      }
    ],
    opts: { duration: 1000 }
  },
  fadeOutUp: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  fadeOutUpBig: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(0, -2000px, 0)'
      }
    ],
    opts: { duration: 1000 }
  },
  flip: {
    ani: [
      {
        offset: 0,
        transform:
          'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
        easing: 'ease-out'
      },
      {
        offset: 0.4,
        transform:
          'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
        easing: 'ease-out'
      },
      {
        offset: 0.5,
        transform:
          'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
        easing: 'ease-in'
      },
      {
        offset: 0.8,
        transform:
          'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
        easing: 'ease-in'
      },
      {
        offset: 1,
        transform:
          'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
        easing: 'ease-in'
      }
    ],
    opts: { duration: 1000 }
  },
  flipInX: {
    ani: [
      {
        offset: 0,
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        easing: 'ease-in',
        opacity: 0
      },
      {
        offset: 0.4,
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        easing: 'ease-in',
        opacity: 0.7
      },
      {
        offset: 0.6,
        transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
        easing: 'linear',
        opacity: 1
      },
      {
        offset: 0.8,
        transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
        easing: 'linear',
        opacity: 1
      },
      {
        offset: 1,
        transform: 'perspective(400px)',
        easing: 'linear',
        opacity: 1
      }
    ],
    opts: { duration: 1000 }
  },
  flipInY: {
    ani: [
      {
        offset: 0,
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        easing: 'ease-in',
        opacity: 0
      },
      {
        offset: 0.4,
        transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
        easing: 'ease-in',
        opacity: 0.7
      },
      {
        offset: 0.6,
        transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
        easing: 'linear',
        opacity: 1
      },
      {
        offset: 0.8,
        transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
        easing: 'linear',
        opacity: 1
      },
      {
        offset: 1,
        transform: 'perspective(400px)',
        easing: 'linear',
        opacity: 1
      }
    ],
    opts: { duration: 500 }
  },
  flipOutX: {
    ani: [
      {
        offset: 0,
        transform: 'perspective(400px)',
        opacity: 1
      },
      {
        offset: 0.3,
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        opacity: 1
      },
      {
        offset: 1,
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  flipOutY: {
    ani: [
      {
        offset: 0,
        transform: 'perspective(400px)',
        opacity: 1
      },
      {
        offset: 0.3,
        transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
        opacity: 1
      },
      {
        offset: 1,
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  lightSpeedIn: {
    ani: [
      {
        offset: 0,
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        opacity: 1,
        easing: 'ease-out'
      },
      {
        offset: 0.6,
        transform: 'skewX(20deg)',
        opacity: 1,
        easing: 'ease-out'
      },
      {
        offset: 0.8,
        transform: 'skewX(-5deg)',
        opacity: 1,
        easing: 'ease-out'
      },
      {
        offset: 1,
        transform: 'translate3d(0, 0, 0)',
        opacity: 1,
        easing: 'ease-out'
      }
    ],
    opts: { duration: 500 }
  },
  lightSpeedOut: {
    ani: [
      {
        transform: 'translate3d(0, 0, 0) skewX(0)',
        opacity: 1,
        easing: 'ease-in'
      },
      {
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        opacity: 0,
        easing: 'ease-in'
      }
    ],
    opts: { duration: 500 }
  },
  rotateIn: {
    ani: [
      {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, -200deg)',
        opacity: 0
      },
      {
        transformOrigin: 'center',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }
    ],
    opts: { duration: 500 }
  },
  rotateInDownLeft: {
    ani: [
      {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: 0
      },
      {
        transformOrigin: 'left bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }
    ],
    opts: { duration: 500 }
  },
  rotateInDownRight: {
    ani: [
      {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: 0
      },
      {
        transformOrigin: 'right bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }
    ],
    opts: { duration: 500 }
  },
  rotateInUpLeft: {
    ani: [
      {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: 0
      },
      {
        transformOrigin: 'left bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }
    ],
    opts: { duration: 500 }
  },
  rotateInUpRight: {
    ani: [
      {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -90deg)',
        opacity: 0
      },
      {
        transformOrigin: 'right bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }
    ],
    opts: { duration: 500 }
  },
  rotateOut: {
    ani: [
      {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 0, 0)',
        opacity: 1
      },
      {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, 200deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  rotateOutDownLeft: {
    ani: [
      {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 0, 0)',
        opacity: 1
      },
      {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  rotateOutDownRight: {
    ani: [
      {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 0, 0)',
        opacity: 1
      },
      {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  rotateOutUpLeft: {
    ani: [
      {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 0, 0)',
        opacity: 1
      },
      {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  rotateOutUpRight: {
    ani: [
      {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 0, 0)',
        opacity: 1
      },
      {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, 90deg)',
        opacity: 0
      }
    ],
    opts: { duration: 500 }
  },
  hinge: {
    ani: [
      {
        offset: 0,
        transform: 'rotate3d(0, 0, 0, 0)',
        transformOrigin: 'top left',
        easing: 'ease-in-out',
        opacity: 1
      },
      {
        offset: 0.2,
        transform: 'rotate3d(0, 0, 1, 80deg)',
        transformOrigin: 'top left',
        easing: 'ease-in-out',
        opacity: 1
      },
      {
        offset: 0.4,
        transform: 'rotate3d(0, 0, 1, 60deg)',
        transformOrigin: 'top left',
        easing: 'ease-in-out',
        opacity: 1
      },
      {
        offset: 0.6,
        transform: 'rotate3d(0, 0, 1, 80deg)',
        transformOrigin: 'top left',
        easing: 'ease-in-out',
        opacity: 1
      },
      {
        offset: 0.8,
        transform: 'rotate3d(0, 0, 1, 60deg)',
        transformOrigin: 'top left',
        easing: 'ease-in-out',
        opacity: 1
      },
      {
        offset: 1,
        transform: 'translate3d(0, 700px, 0)',
        transformOrigin: 'top left',
        opacity: 0
      }
    ],
    opts: { duration: 2000 }
  },
  jackInTheBox: {
    ani: [
      {
        offset: 0,
        opacity: 0,
        transform: 'scale(0.1) rotate(30deg)',
        transformOrigin: 'center bottom'
      },
      {
        offset: 0.5,
        opacity: 1,
        transform: 'rotate(-10deg)',
        transformOrigin: 'center bottom'
      },
      {
        offset: 0.7,
        opacity: 1,
        transform: 'rotate(3deg)',
        transformOrigin: 'center bottom'
      },
      {
        offset: 1,
        opacity: 1,
        transform: 'scale(1)',
        transformOrigin: 'center bottom'
      }
    ],
    opts: { duration: 500 }
  },
  rollIn: {
    ani: [
      {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'
      },
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  rollOut: {
    ani: [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      },
      {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomIn: {
    ani: [
      {
        opacity: 0,
        transform: 'scale3d(0.3, 0.3, 0.3)'
      },
      {
        opacity: 1,
        transform: 'scale3d(1, 1, 1)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomInDown: {
    ani: [
      {
        offset: 0,
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 0.6,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      },
      {
        offset: 1,
        opacity: 1,
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomInLeft: {
    ani: [
      {
        offset: 0,
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 0.6,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      },
      {
        offset: 1,
        opacity: 1,
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomInRight: {
    ani: [
      {
        offset: 0,
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 0.6,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      },
      {
        offset: 1,
        opacity: 1,
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomInUp: {
    ani: [
      {
        offset: 0,
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 0.6,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      },
      {
        offset: 1,
        opacity: 1,
        transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomOut: {
    ani: [
      {
        opacity: 1,
        transform: 'scale3d(1, 1, 1)'
      },
      {
        opacity: 0,
        transform: 'scale3d(0.3, 0.3, 0.3)'
      },
      {
        opacity: 0,
        transform: 'scale3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomOutDown: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
        transformOrigin: 'center bottom'
      },
      {
        offset: 0.4,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
        transformOrigin: 'center bottom',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
        transformOrigin: 'center bottom',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomOutLeft: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
        transformOrigin: 'left center'
      },
      {
        offset: 0.4,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
        transformOrigin: 'left center',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
        transformOrigin: 'left center',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomOutRight: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
        transformOrigin: 'right center'
      },
      {
        offset: 0.4,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
        transformOrigin: 'right center',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'scale(0.1) translate3d(2000px, 0, 0)',
        transformOrigin: 'right center',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      }
    ],
    opts: { duration: 500 }
  },
  zoomOutUp: {
    ani: [
      {
        offset: 0,
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
        transformOrigin: 'center bottom'
      },
      {
        offset: 0.4,
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
        transformOrigin: 'center bottom',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      },
      {
        offset: 1,
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
        transformOrigin: 'center bottom',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
      }
    ],
    opts: { duration: 500 }
  },
  slideInDown: {
    ani: [
      {
        transform: 'translate3d(0, -100%, 0)'
      },
      {
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideInLeft: {
    ani: [
      {
        transform: 'translate3d(-100%, 0, 0)'
      },
      {
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideInRight: {
    ani: [
      {
        transform: 'translate3d(100%, 0, 0)'
      },
      {
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideInUp: {
    ani: [
      {
        transform: 'translate3d(0, 100%, 0)'
      },
      {
        transform: 'translate3d(0, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideOutDown: {
    ani: [
      {
        transform: 'translate3d(0, 0, 0)'
      },
      {
        transform: 'translate3d(0, 100%, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideOutLeft: {
    ani: [
      {
        transform: 'translate3d(0, 0, 0)'
      },
      {
        transform: 'translate3d(-100%, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideOutRight: {
    ani: [
      {
        transform: 'translate3d(0, 0, 0)'
      },
      {
        transform: 'translate3d(100%, 0, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  slideOutUp: {
    ani: [
      {
        transform: 'translate3d(0, 0, 0)'
      },
      {
        transform: 'translate3d(0, -100%, 0)'
      }
    ],
    opts: { duration: 500 }
  },
  heartBeat: {
    ani: [
      {
        offset: 0,
        transform: 'scale(1)'
      },
      {
        offset: 0.14,
        transform: 'scale(1.3)'
      },
      {
        offset: 0.28,
        transform: 'scale(1)'
      },
      {
        offset: 0.42,
        transform: 'scale(1.3)'
      },
      {
        offset: 0.7,
        transform: 'scale(1)'
      },
      {
        offset: 1,
        transform: 'scale(1)'
      }
    ],
    opts: { duration: 1300 }
  }
};
export default animates;
