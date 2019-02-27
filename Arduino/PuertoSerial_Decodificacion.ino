
char a=' ';
String b="";
void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available())
  {
  a=Serial.read();
  if(a!=' ')
  {
   b=String(a);
  String cadena= cadena+b;
  Serial.print(b); 
  }
  else
  {
   Serial.println(""); 
  }
  }
}
