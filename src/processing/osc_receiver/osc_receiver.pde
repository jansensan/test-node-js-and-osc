import oscP5.*;
import netP5.*;


// constants
int PORT = 57111;

// vars
OscP5 oscP5;
int x, y;


// processing methods
void setup() {
  size(640, 360);
  background(160);

  oscP5 = new OscP5(this, PORT);
}

void draw() {
  background(160);
}


// methods definitions
void oscEvent(OscMessage message) {
  if (message.addrPattern().equals("/pde")) {
    println("--- oscEvent ---");
    println(message.get(0).intValue());
  }
}