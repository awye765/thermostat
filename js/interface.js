$(document).ready(function() {
  var thermostat = new Thermostat();
  // Instantiates new thermostat object
  updateTemperature();
  // Updates current temperature of thermostat in the browser.

  $('#increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  // function updateTemperature() {
  //   $('#temperature').text(thermostat.temperature);
  //   if(thermostat.energyUsage() === 'low') {
  //     $('#temperature').css('color', 'green')
  //   } else if(thermostat.energyUsage() === 'medium') {
  //     $('#temperature').css('color', 'orange')
  //   } else {
  //     $('#temperature').css('color', 'red')
  //   }
  // }

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
  // Replaces the html tag with id 'temperature' with whatever is the return
  // value of the JS method thermostat.temperature in our thermostat.js file.
  // This allows us to display the current temperature of the thermostat in the
  // browser.

})
