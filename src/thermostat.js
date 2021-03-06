'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PSM_ON_MAXIMUM_TEMPERATURE = 25;
  this.PSM_OFF_MAXIMUM_TEMPERATURE = 32;
  this.LOW_ENERGY_LIMIT = 18;
  this.MEDIUM_ENERGY_LIMIT = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function(){
  if(this.isMinimumTemperature()){
    return;
  }
  this.temperature--;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn()){
    return this.temperature === this.PSM_ON_MAXIMUM_TEMPERATURE;
  }
  return this.temperature === this.PSM_OFF_MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.LOW_ENERGY_LIMIT) {
    return "low-usage";
  }
  else if (this.temperature < this.MEDIUM_ENERGY_LIMIT) {
    return "medium-usage";
  }
  return "high-usage";

};
