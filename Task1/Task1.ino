/*
 * PIR sensor tester
 */

//set PIN 2 as the input pin for the motion 
int inputPin = 2;             
//Set pin 13 as the PIN 
int ledPin = 13;
//Begin the status as no motion 
int motionStatus = LOW;      
//variable for pin status 
int value = 0;                  
 
void setup() {
  pinMode(ledPin, OUTPUT);      // declare LED as output
  pinMode(inputPin, INPUT);     // declare sensor as input
 
  Serial.begin(9600);
}
 
void loop(){
  // read input value (High or low)
  value = digitalRead(inputPin);  
  
  //If there is motion
  if (value == HIGH) {      
    //turn on LED      
    digitalWrite(ledPin, HIGH); 
    //To update the motionStatus
    if (motionStatus == LOW) {
      //Print line 
      Serial.println("There is a motion");
      //update
      motionStatus = HIGH;
    }
  } else {
    //When there is no motion, which means the motion stopped.
    digitalWrite(ledPin, LOW); //Off the LED
    if (motionStatus == HIGH){
      //print
      Serial.println("The motion just ended");
      //update
      motionStatus = LOW;
    }
  }
}
