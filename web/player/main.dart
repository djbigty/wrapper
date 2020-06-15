import 'dart:html';

void main(){
  int w = window.innerWidth;
  int h = window.innerHeight;
  DivElement player = querySelector('#player');
  ParagraphElement domain = querySelector('#domain');
  var insert = videoInsert(w, h, domain.text);
  player.append(insert);
}

IFrameElement videoInsert(int w, h, String domain){
  IFrameElement x = IFrameElement()
  ..src = 'https://player.twitch.tv/?channel=djbigty&parent=${domain}'
  ..width = w.toString()
  ..height = h.toString();
  print(x.srcdoc);

  return x;
}