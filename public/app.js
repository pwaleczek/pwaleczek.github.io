/**
 * @file app.js Main app
 * @author Paweł Waleczek
 */

/* globals cq */

(function main() {
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
    , audioContext
    , analyser

  function run(ev) {
    var gui = new dat.GUI()

    gui.add(options, 'flicker', -10, 10)
    gui.add(options, 'elGridX', 1, 9)
    gui.add(options, 'elGridY', 1, 9)
    gui.add(options, 'elGridSpacing', 20, 500)
    gui.add(options.x, 'fn', ['sin', 'cos', 'tan'])
    gui.add(options.x, 'mx', 0, 100)
    gui.add(options.y, 'fn', ['sin', 'cos', 'tan'])
    gui.add(options.y, 'mx', 0, 100)
    gui.add(options, 'pause')
    gui.add(options, 'moving')
    gui.add(options, 'randomSpacing')

    canvas = cq().appendTo(document.body)
    buffer = cq()

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

      analyser = audioContext.createAnalyser()
      analyser.fftSize = 2048
      mediaStreamSource.connect( analyser )
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

    analyser && analyser.getFloatTimeDomainData(audioBuffer)
    var ac = autoCorrelate(audioBuffer, audioContext.sampleRate)

    options.y.mx = Math.log(ac*ac)
    options.x.mx = ac/100
    console.log(options.y.mx)

    var pos = {
            x: options.moving
                ? Math[options.x.fn](counter += options.flicker) * options.x.mx
                : 0
          , y: options.moving
                ? Math[options.y.fn](counter += options.flicker) * options.y.mx
                : 0
        }
      , spacing = options.randomSpacing
                    ? options.elGridSpacing * Math.random() * ac
                    : options.elGridSpacing
      , i
      , j
    console.log(pos)
    canvas.clear('#000')
    buffer.clear()

    buffer.fillStyle('#fff')
    for (i = Math.round(options.elGridY / 2) - options.elGridY;
              i < Math.round(options.elGridY / 2); i++) {
      for (j = Math.round(options.elGridX / 2) - options.elGridX;
                j < Math.round(options.elGridY / 2); j++) {
        buffer.fillRect(
            pos.x - 20 + canvas.canvas.width / 2 - spacing * j
          , pos.y - 20 + canvas.canvas.height / 2 - spacing * i
          , 40
          , 40
        )
      }
    }

    canvas.drawImage(buffer.canvas, 0, 0
      , canvas.canvas.width
      , canvas.canvas.height
    )

    window.requestAnimationFrame(step)
  }

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
})()
