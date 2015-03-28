/**
 * @file app.js Main app
 * @author Paweł Waleczek
 */

/* globals cq */

// (function main() {
  var canvas = null
    , buffer = null
    , mousePos = {}
    , counter = 0
    , options = {
          flicker: 6.9
        , elGridX: 4
        , elGridY: 5.9
        , elGridSpacing: 300
        , x: {
              fn: 'tan'
            , mx: 70
          }
        , y: {
              fn: 'tan'
            , mx: 0
          }
        , pause: false
        , randomSpacing: false
        , moving: true
      }
    , flies = []
    , audioContext
    , audioAnalyser
    , zMod = false
    , bgImage = new Image()

  function extend(obj) {
    [].forEach.call([].slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop]
        }
      }
    })
    return obj
  }

  function constrain(val, min, max) {
    if (val > max) val = max
    else if (val < min) val = min

    return val
  }

  // Fly

  function Fly(options) {
    this.rangeMax = 10
    this.range = 4
    this.speedMax = 6
    this.speed = 2
    // this.position = extend(((options && ptions.position) || {}), position)
    this.target = null
    this.dir = {
        x: 1
      , y: 1
    }
    this.steps = 0
    this.maxZoom = 15
    this.targetRange = 75
    this.zMod = 1
    this.position = {
        x: Math.random() * (canvas.width)
      , y: Math.random() * (canvas.height)
      , z: Math.random() * (this.maxZoom)
    }
    console.log(this.position)
    this.setTarget()

    return this
  }

  Fly.prototype.move = function move() {
    var x = this.position.x
      , y = this.position.y
      , z = this.position.z
      , dir = this.dir

    if (Math.random() > 0.5) {
      this.speed = constrain(Math.random() * this.speedMax, 5, this.speedMax)
    }

    x += this.zMod * this.steps * this.target.xDist * ( Math.random() * this.range)
    y += this.zMod * this.steps * this.target.yDist * ( Math.random() * this.range)
    z += this.zMod * this.steps * this.target.zDist * ( Math.random() * this.range)

    this.position.x = constrain(x, 0 - this.position.z, canvas.width - this.position.z)
    this.position.y = constrain(y, 0 - this.position.z, canvas.height - this.position.z)
    this.position.z = constrain(z, 0, this.maxZoom)
  }

  Fly.prototype.setTarget = function setTarget() {
    var x = Math.random() * canvas.width
      , y = Math.random() * canvas.height
      , z = Math.random() * canvas.height
      , xDist = x - this.position.x
      , yDist = y - this.position.y
      , zDist = z - this.position.z

    this.target = {
        x: x
      , y: y
      , z: Math.random() > 0.7 ? z : this.position.z
      , xDist: xDist
      , yDist: yDist
      , zDist: zDist
    }

    this.steps = this.speed / Math.abs(Math.sqrt(xDist * xDist + yDist * yDist))
    console.log( this.speed, Math.abs(Math.sqrt(xDist * xDist + yDist * yDist)))
    console.log('target ----> %d, %d, %f, %f, steps -> %f', this.target.x, this.target.y,this.target.xDist, this.target.yDist, this.steps)
    console.log(this.zMod)
  }

  Fly.prototype.calculateZMod = function calculateZMod(zMod) {
    if (window.zMod == true)
      this.zMod += (zMod - this.zMod)
    else
      this.zMod = 1
  }

  Fly.prototype.checkTarget = function checkTarget() {
    var x = this.position.x
      , y = this.position.y
      , z = this.position.z
      , tx = this.target.x
      , ty = this.target.y
      , tz = this.target.z

    return (
         Math.abs(tx - x) < this.targetRange
      && Math.abs(ty - y) < this.targetRange
    )
  }

  Fly.prototype.draw = function draw(buffer) {
    buffer.beginPath()
    buffer.arc(
        this.position.x
      , this.position.y
      , this.position.z // level 0 is 30px radius
      , 0
      , 2 * Math.PI
      , false
    )
    buffer.closePath()
    buffer.fillStyle('#000')
    buffer.fill()
  }

  // end Fly

  function run(ev) {
    // var gui = new dat.GUI()

    // gui.add(options, 'flicker', -10, 10)
    // gui.add(options, 'elGridX', 1, 9)
    // gui.add(options, 'elGridY', 1, 9)
    // gui.add(options, 'elGridSpacing', 20, 500)
    // gui.add(options.x, 'fn', ['sin', 'cos', 'tan', 'log', 'exp', 'atan'])
    // gui.add(options.x, 'mx', 0, 100)
    // gui.add(options.y, 'fn', ['sin', 'cos', 'tan', 'log', 'exp', 'atan'])
    // gui.add(options.y, 'mx', 0, 100)
    // gui.add(options, 'pause')
    // gui.add(options, 'moving')
    // gui.add(options, 'randomSpacing')

    canvas = cq().appendTo(document.body)
    buffer = cq()

    bgImage.src = '/public/bg.png'
    audioContext = new AudioContext()

    navigator.webkitGetUserMedia({
      "audio": {
          "mandatory": {
              "googEchoCancellation": "false",
              "googAutoGainControl": "false",
              "googNoiseSuppression": "false",
              "googHighpassFilter": "false"
          },
          "optional": []
      },
    }, function(stream) {
      mediaStreamSource = audioContext.createMediaStreamSource(stream)

      audioAnalyser = audioContext.createAnalyser()
      audioAnalyser.fftSize = 2048
      mediaStreamSource.connect(audioAnalyser)

      for (var i = 0; i < 400; i++) {
        flies.push(new Fly())
      }
    }, function() { console.log('error', arguments) })


    window.requestAnimationFrame(step)
  }

  function mouseMove(ev) {
    mousePos.x = ev.clientX
    mousePos.y = ev.clientY
  }

  window.set = function set(property, subproperty, value) {
    if (!value) {
      options[property] = subproperty
    } else {
      options[property][subproperty] = value
    }
  }

  var bufferSize = 1024
    , audioBuffer = new Float32Array(bufferSize)

  function step() {
    if (!!options.pause) {
      window.requestAnimationFrame(step)

      return
    }

    audioAnalyser && audioAnalyser.getFloatTimeDomainData(audioBuffer)
    var ac = autoCorrelate(audioBuffer, audioContext.sampleRate)

    canvas.clear('#fff')
    buffer.clear()

    // draw flies
    for (var i = 0; i < flies.length; i++) {
      flies[i].move()
      flies[i].draw(buffer)
      flies[i].calculateZMod(ac/100)
      // flies[i].speed =  //Math.log(ac*ac)

      if (flies[i].checkTarget()) flies[i].setTarget()
    }
    canvas.drawImage(bgImage, 0, canvas.height/2 - bgImage.height/2 - 280, canvas.width, bgImage.width)
    canvas.drawImage(buffer.canvas, 0, 0
      , canvas.canvas.width
      , canvas.canvas.height
    )

    window.requestAnimationFrame(step)
  }
///////////




  function autoCorrelate( buf, sampleRate ) {
    var SIZE = buf.length
    var MAX_SAMPLES = Math.floor(SIZE / 2)
    var MIN_SAMPLES = 0
    var best_offset = -1
    var best_correlation = 0
    var rms = 0
    var foundGoodCorrelation = false
    var correlations = new Array(MAX_SAMPLES)

    for (var i = 0; i < SIZE; i++) {
      var val = buf[i]
      rms += val * val
    }
    rms = Math.sqrt(rms / SIZE)
    if (rms < 0.01)
      return -1

    var lastCorrelation = 1
    for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
      var correlation = 0

      for (var i=0; i<MAX_SAMPLES; i++) {
        correlation += Math.abs((buf[i]) - (buf[i + offset]))
      }
      correlation = 1 - (correlation / MAX_SAMPLES)
      correlations[offset] = correlation
      if ((correlation > 0.9) && (correlation > lastCorrelation)) {
        foundGoodCorrelation = true
        if (correlation > best_correlation) {
          best_correlation = correlation
          best_offset = offset
        }
      } else if (foundGoodCorrelation) {

        var shift = (correlations[best_offset+1] - correlations[best_offset - 1]) / correlations[best_offset]
        return sampleRate / (best_offset + (8 * shift))
      }

      lastCorrelation = correlation
    }

    if (best_correlation > 0.01) {
      // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
      return sampleRate / best_offset
    }
    return -1
    //  var best_frequency = sampleRate/best_offset;
  }

  document.addEventListener('DOMContentLoaded', run)
  document.addEventListener('mousemove', mouseMove)
// })()
