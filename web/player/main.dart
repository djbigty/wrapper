import 'dart:html';

void main(){
  int w = window.innerWidth;
  int h = window.innerHeight;
  var d = window.document;
  DivElement player = querySelector('#player');
  var insert = videoInsert(w, h, d.domain);
  player.append(insert);
}

IFrameElement videoInsert(int w, h, String domain){
  IFrameElement x = IFrameElement()
  ..src = 'https://player.twitch.tv/?channel=djbigty&parent=${domain}'
  ..width = w.toString()
  ..height = h.toString()
  ..borderEdge.width = 0
  ..borderEdge.height = 0;
  print(x.srcdoc);

  return x;
}