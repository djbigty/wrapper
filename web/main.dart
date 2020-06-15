import 'dart:html';

void main() {
  Element vid;
  int w = window.innerWidth;
  int h = window.innerHeight;
  
  sleepTimer();
  querySelector('#logo').hidden = true;
  querySelector('#player').hidden = false;
  sleepTimer();
  var domain = querySelector('#domain');
  print(domain.text);
  vid = videoInsert(w, h, domain.text);
  querySelector('#player').append(vid);
}

IFrameElement videoInsert(int w, h, String domain){
  IFrameElement x = IFrameElement()
  ..src = 'https://player.twitch.tv/?channel=djbigty&parent=${domain}'
  ..width = w.toString()
  ..height = h.toString();
  print(x.srcdoc);

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