# Arduino/PIR Motion Sesnor. IOT Control Panel

### About the project
The main objective of this project is to allow the user to control the Arduino Board from the client server. The user will enters a control panel page once they open the hosted server in a browser. Form there, the user can access the five main functions if this project: 

1) Switch on/off for the LED light. 
2) Switch on/off for the motion sensor.
3) Read number of motion dectected by the PIR motion sensor. 
4) Read number of Long motion detected by the PIR motion sesor. 
5) Read number of short motion detected by the PIR motion sensor. 

### Structures
The structure of this project consist of the following components: 
1) Johnny five 
    Johnny-Five is the JavaScript Robotics & IoT Platform. Released by Bocoup in 2012. It communicaets with the board in whatver language that the platform speaks. In this project, it is implemented using Node.js. 
2) Socket.io 
    A library that provide realtime communication between web cliens and the server. 
3) HTML/CSS
    The GUI on the client side is created by using HTML and CSS. The HTML communicate with node.js file when actions apply on the page
4) node.js 
    A file that consist all the actions of the board. By receiving information from the HTML, it triggers the action of the board then send informations back to html. 


## Get Started
#### Setting up the board
Step 1 
Connect motion sensor (PIR) to Arduino board
 - Out (PIR) -> Port 2 of Digital I/O Pins
 - VCC (PIR) -> Power supply 5V
 - GND (PIR) -> Power supply GND

Step 2
Connect LED
 - Positve (LED) -> Port 13 of Digital I/O Pins
 - Negative (LED) -> GND of DIgital I/O Pins

Step 3 
Plug in USB to computer/laptop

### Installation
Open Arduino IDE
Open file -> Examples -> Firmata -> StanadardFirmata
Click on "Upload"
Note: Make sure the upload is successful. 

Use LXTerminal and open the directory where the folder is located. 
Install...

```sh
$ npm install express --save
$ npm install johnny-five --save
$ npm install socket.io --save
```

### To host the server 
1. After the installation. Use LXTerminal and open the directory where the folder is located. 
2. type in the following code:
    ```sh
    $ node server.js
    ```
3. Open this URL: http://localhost:3000 in a browser.

### Using the control panel 
The control panel is built in a table form which consist of five rows. Each rows has it's own functionality. 
1. LED on/off switch 
 By switch on the toggle switch, it lights up the LED on the board. 
 By switch off the toggle switch, it lights off the LED on the board. 
2. Motion Sensor on/off switch 
    By switch on the toggle switch, it starts reading motion. 
    By switch off the toggle switch, it stops reading motion. 
3. Motion detected counter
    It counts the number of motion detected by the sensor. 
4. Long motion counter 
    It counts the long motion detected by the sensor for any movement that is longer than 7 seconds. 
5. Short motion counter 
    It counts the short motion detected by the sensor for any mvement is shorter or equals to 7 seconds. 



## Reference 
1.Johhny-five
URL: http://johnny-five.io
2.Socket. io 
URL: https://en.wikipedia.org/wiki/Socket.IO
3.Fit3140 wiki from moodle
URL: https://sites.google.com/a/monash.edu/fit3140/socket-io-and-iot


