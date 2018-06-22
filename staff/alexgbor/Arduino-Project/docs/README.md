# Arduino Controller

Arduino Controller is a full stack project that allows the user control both the inputs and outputs of their arduino/s.

You'll be provided with the instructions to set up your arduino, from there you just need to register in the website to start retrieving (and/or graphing) your arduino data, switching the output pins, etc.

## Getting Started

* What do I need?
* Register
* Basic circuit
* Programming your arduino
* Control Panel


### What do I need?

First of all, you'll need either an Arduino (any model, but Uno is recommended) and wi-fi module ESP8266, or a NodeMCU board (which works as an arduino + wifi module).

After that, depending on what you want to build, you'll need male-male pin cable, resistors, diodes, etc. 

![Arduino Uno](http://cdn-tienda.bricogeek.com/946-thickbox_default/arduino-uno.jpg)

##### Arduino Uno

![ESP8266](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ESP-01.jpg/300px-ESP-01.jpg)

##### ESP8266 Wi-Fi Module

![NodeMCU](https://images-na.ssl-images-amazon.com/images/I/81U4jvpGnYL._SX522_.jpg)

##### NodeMCU

### Register

As soon as you land in the website, go to REGISTER and fill the form.

If you succeed you'll be redirected to the login page, where you can write down your e-mail and password.

For now you don't need anything else, even though you can complete or edit your profile.

### Basic Circuit

In order to connect your NodeMCU you'll only need to plug in a mini-USB to the PC. In case you use an Arduino+ESP8266 wi-fi module just follow the next schematic:

![Arduino+Wifi Module](http://www.teomaragakis.com/wp-content/uploads/2015/10/uno_esp_connection.png)

After that you can plug in an USB from your Arduino to the PC.

Now you're ready to connect your device to your local router through wi-fi connection, but in case you want to spice up your project I'll give you two examples of Input control and Output control.

#### Input: Temperature sensor (DS18B20)

![NodeMCU with temp sensor](https://raw.githubusercontent.com/mwittig/pimatic-fritzing-sketches/master/esp-pimatic/ESP-ds18b20.png)

#### Output: Two LED (200Ω Resistors)

![NodeMCU with two LED](https://3.bp.blogspot.com/-ol56RgvuUqo/Vx_DRntYr6I/AAAAAAAADpM/ip-VQjYc5g0A8GFfubyzIefM68ATSvzdgCLcB/s1600/Ledstrip01.jpg)

### Programming your arduino

Here comes the hard part, try to follow the main steps and from there just be creative.

## TO DO TO DO TO DO TO DO TO DO TO DO TO DO 

### Control Panel

Congratulations, it's time for the fun part. 
In the Arduino IDE press Ctrl+Shift+M or open the Serial Monitor Manually.

You should see the Arduino IP in the screen, write it down. In case you don't see it, push the Reset button in your device.

In the Control Panel of the website, go to "Add Arduino" and use the IP you've just seen in the Serial Monitor. Port isn't that important now, but it will be in the next version of the website, use the port you want. Hit add.

Now go to "Arduino List" and retrieve a list of your arduinos, then select the one you've just added. Now go to your Arduino IDE and fill the User ID and Arduino ID gaps.

After that you'll be able to send data to our database (and graph it automatically), stop it and control the outputs of any pin in the respective tab. You'll also be able to remove your data, arduino or retrieve all the data in a .csv file.

Enjoy!



## Utils

Please read [this article](http://www.instructables.com/id/Quick-Start-to-Nodemcu-ESP8266-on-Arduino-IDE/) for details on how to setup the Arduino IDE for NodeMCU or Arduino+ESP8266.

For exported .csv, in case you need to format the data follow the instructions of the answer [here](https://stackoverflow.com/questions/44396943/generate-a-csv-file-from-a-javascript-array-of-objects).


## Authors

* **Alex Gómez Borrego** - *Full stack project* - [alexgbor](https://github.com/alexgbor)

Special thanks to the Skylab Coders family.

#### Version 1.0