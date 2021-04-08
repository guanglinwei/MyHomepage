![Temperature and Humidity Graph, 940, 440](/tempmonitorgraph1.png)

## About  
  
Website that gets data from the [SI7021 I2C Humidity and Temperature Sensor](https://www.adafruit.com/product/3251) and displays it.

The server runs on [Flask](https://flask.palletsprojects.com/en/1.1.x/) and a [Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/).  
  

## How it works  
  
[This](https://github.com/ControlEverythingCommunity/SI7021/blob/master/Python/SI7021.py) is used to get humidity and temperature readings from the sensor.  
All data is stored on a database.  
When a user visits the page, this data is displayed with [Chart.js](https://github.com/chartjs/Chart.js).