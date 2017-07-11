import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import oscP5.*; 
import netP5.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class osc_receiver extends PApplet {





// constants
int PORT = 57111;

// vars
OscP5 oscP5;
int x, y;


// processing methods
public void setup() {
  
  background(160);

  oscP5 = new OscP5(this, PORT);
}

public void draw() {
  background(160);
}


// methods definitions
public void oscEvent(OscMessage message) {
  if (message.addrPattern().equals("/pde")) {
    println("--- oscEvent ---");
    println(message.get(0).intValue());
  }
}
  public void settings() {  size(640, 360); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "osc_receiver" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
