var express = require('express');  
var app = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);
var board = new five.Board();
var port = 3000; 
longmotioncounter = 0;
shortmotioncounter = 0;
motioncounter = 0;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {  
        res.sendFile(__dirname + '/public/index.html');
});

httpServer.listen(port);  
console.log('Set up completed !. Server hosted @ http://localhost:' + port);

// Create a instance for led and motion
var led;
var motion; 

//Connect Adruino Board
board.on("ready", function() {
    console.log('Arduino connected');
    led = new five.Led(13);
    console.log('LED connected');

    motion = new five.Motion(2);
    console.log('Motion connected');

});

io.on('connection', function (socket) { 
    // Receive the information from HTML whether the switch is on/off
    socket.on('toggle',function(data) {
        toggle = data.description;
        if(toggle == 1){
            console.log("Motion switch is ON.");
        }else{
            console.log("Motion switch is OFF.")
        }
    });
    
    // When motion is detected
    socket.on('motion', function() {
        
        // Motion start
        motion.on("motionstart", function() {
            console.log("Motion start");
            start = new Date();
        });
        
        // Motion end
        // Calculate the time for the motion to end
        motion.on("motionend", function(){
            console.log("Motion ended");
            end = new Date();    
            sec = (end-start)*(0.001);
            sec = Math.round(sec*10)/10 ;
            console.log(sec);
            
            // Update motion counter when the motion switch is ON
            // And emit it to HTML
            if(toggle == 1){
                motioncounter++;
                io.sockets.emit('motionCounter',{description:motioncounter});
                
                // To check if it is a long||short motion
                // Update long||short motion accordingly 
                // And emit it to HTML
                if(sec > 7) {
                    console.log("This is a long motion"); 
                    longmotioncounter++;
                    io.sockets.emit('longmotionCounter',{description:longmotioncounter});
                }else {
                    console.log("This is a short motion");
                    shortmotioncounter++;
                    io.sockets.emit('shortmotionCounter',{description:shortmotioncounter});
                }
            }
            // Do nothing when the motion switch is OFF
            else{
                console.log("Motion switch is OFF")
            }
        });
    });
    
    // To turn the LED on
    socket.on('ledOn', function(data){
        led.on();
        console.log('LED ON Received');
    });
    // To turn the LED off
    socket.on('ledOff',function(data){
        led.off(); 
        console.log('LED OFF Received'); 
    });
});