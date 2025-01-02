var now = new Date();
var year = now.getFullYear();
var month = now.getMonth()+1;
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();

var isAnswer = false;
var isDefalttalking = false;

var slideNo=0;

//名前呼び
function ex_name(){
  console.log("log-name");
          chara_action("Name");
}

//じゃんけん
function ex_janken(){
  console.log("log-janken");
  rand = Math.floor(Math.random()*3)
  if (rand == 0) chara_action("Choki");
  if (rand == 1) chara_action("Gu");
  if (rand == 2) chara_action("Pa");
}

//スライドめくり
function ex_slide(){
  charaBefore();
    if(slideNo<2){
      slideNo++;
    }else {
      slideNo=0;
    }
  document.getElementById("slide").innerHTML = '<img src=\"s'+slideNo+'\.png\">';
  charaAfter();
}

//一致なし
function noMatch(){
  if (~rtnString.indexOf("こんにちは") || ~rtnString.indexOf("こんにちわ")) {
    console.log("log-greet");
          chara_action("Greet");
  }else if (~rtnString.indexOf("手を振って")) {
    console.log("log-bye");
          chara_action("Bye");
  }else if (~rtnString.indexOf("可愛い") || ~rtnString.indexOf("かわいい") || ~rtnString.indexOf("美しい") || ~rtnString.indexOf("素敵")) {
    console.log("log-kawaii");
          chara_action("Kawaii");
  }else if (~rtnString.indexOf("何歳") || ~rtnString.indexOf("歳は") || ~rtnString.indexOf("年齢は")) {
    console.log("log-nenrei");
          chara_action("Nenrei");
  }else if (~rtnString.indexOf("何ができる") || ~rtnString.indexOf("何してる")) {
    poster(35);
    console.log("log-menu");
          chara_action("Menu");
  }else if (~rtnString.indexOf("なつき") || ~rtnString.indexOf("ねえねえ")) {
    console.log("log-yonda");
          chara_action("Yonda");
  }else if (~rtnString.indexOf("趣味")) {
    console.log("log-bukatsu");
          chara_action("Bukatsu");
  }else if (~rtnString.indexOf("パンツ何色")) {
    console.log("log-pants");
          chara_action("Pants");
  }else if (~rtnString.indexOf("知らなかった") || ~rtnString.indexOf("そうなんだ")) {
    console.log("log-oshiete");
          chara_action("Oshiete");
  }else if (~rtnString.indexOf("にゃー") || ~rtnString.indexOf("猫")) {
    console.log("log-nyan");
          chara_action("Nyan");
  }else if (~rtnString.indexOf("兄弟は")) {
    console.log("log-otouto");
          chara_action("Otouto");
  }else if (~rtnString.indexOf("意気込みは") || ~rtnString.indexOf("頑張って")) {
    console.log("log-gannbaruzo");
          chara_action("Gannbaruzo");
  }else if (~rtnString.indexOf("好きな食べ物")) {
    console.log("log-tabemono");
          chara_action("Tabemono");
  }else if (~rtnString.indexOf("好きなタイプ")) {
    console.log("log-type");
          chara_action("Type");
  }else if (~rtnString.indexOf("歌")) {
    console.log("log-uta");
          chara_action("Uta");
        } else {
    vr_function();
  }
}