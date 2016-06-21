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
    // Replaces the html tag with id 'temperature' with whatever is the return
    // value of the JS method thermostat.temperature in our thermostat.js file.
    // This allows us to display the current temperature of the thermostat in the
    // browser.
    //
    $('#temperature').attr('class', thermostat.energyUsage());
    // The above syntax takes the pattern:
    // => $(selector).attr(attribute, value)
    //
    // Attr sets the attribute and value for the selector.  In the above:
    // => the selector is the html in our html file with id of 'temperature'
    // => the attribute in the above is 'class'
    // => the value in the above is the return value of 'thermostat.energyUsage'
    //
    // The return value of thermostat.energyUsage() will return a string, either
    // "low-usage", "medium-usage" or "high-usage".  Those strings correspond
    // to the names of the CSS classes in the CSS file.  Together with the
    // attribute 'class' in the above, this tells JQuery to render the html
    // element with id of "temperature" in the html file in the appropriate
    // colour described in the CSS file.
    //
  }

})
