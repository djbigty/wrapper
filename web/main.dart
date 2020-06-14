import 'dart:html';

void main() {
  ObjectElement vid;
  int w = window.innerWidth;
  int h = window.innerHeight;
  
  var d = Document();
  print(d.domain);
  sleepTimer();
  querySelector('#logo').hidden = true;
  querySelector('#player').hidden = false;
  vid = videoInsertObject(w, h, d.domain);
  querySelector('#player').append(vid);
}

IFrameElement videoInsert(int w, h, String domain){
  IFrameElement x = IFrameElement()
  ..src = 'https://player.twitch.tv/?channel=djbigty&parent=${domain}'
  ..width = w.toString()
  ..height = h.toString();
  return x;
}

ObjectElement videoInsertObject(int w, h, String domain){
  ObjectElement x = ObjectElement()
  ..data = 'https://player.twitch.tv/?channel=djbigty&parent=${domain}'
  ..width = w.toString()
  ..height = h.toString();
  return x;
}
Future pause(Duration d) => new Future.delayed(d);

void sleepTimer() async{
    await pause(const Duration(seconds: 3)); //  pause the program for given duration
}