import 'dart:html';

void main() {
  IFrameElement vid;
  int w = window.innerWidth;
  int h = window.innerHeight;

  var d = Document();
  sleepTimer();
  querySelector('#logo').hidden = true;
  querySelector('#player').hidden = false;
  vid = videoInsert(w, h, d.domain);
  querySelector('#player').append(vid);
}

IFrameElement videoInsert(int w, h, String domain){
  w--;
  h--;
  IFrameElement x = IFrameElement()
  ..src = 'https://player.twitch.tv/?channel=djbigty&parent=${domain}'
  ..allow = 'allowfullscreen="true" scrolling="no"'
  ..width = w.toString()
  ..height = h.toString();
  print(x.src);
  return x;
}
Future pause(Duration d) => new Future.delayed(d);

void sleepTimer() async{
    await pause(const Duration(seconds: 3)); //  pause the program for given duration
}