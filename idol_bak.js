//グローバル変数宣言
var flag_speech = 0;
var flag_charaPlay = false;
var text;
var text_kisei;
var balloon_text;
var numoftext_kisei;
var num;
var bus_position;
var before_bus_position;


//初期設定：動画消去、ここにWait以外を書いていく
function charaHide() {
  document.getElementById("charaGreet").style.display = "none";
  document.getElementById("charaBus").style.display = "none";
  document.getElementById("charaChikan").style.display = "none";
  document.getElementById("charaJun").style.display = "none";
  document.getElementById("charaBye").style.display = "none";
  document.getElementById("charaDensha").style.display = "none";
  document.getElementById("charaIdol").style.display = "none";
  document.getElementById("charaKeiiku").style.display = "none";
  document.getElementById("charaBot").style.display = "none";
  document.getElementById("charaMiraikan").style.display = "none";
  document.getElementById("charaCo2").style.display = "none";
  document.getElementById("charaProve").style.display = "none";
  document.getElementById("charaSaikawa").style.display = "none";
  document.getElementById("charaJikoshoukai").style.display = "none";
  document.getElementById("charaIcar").style.display = "none";
  document.getElementById("charaName").style.display = "none";
  document.getElementById("charaKawaii").style.display = "none";
  document.getElementById("charaNenrei").style.display = "none";
  document.getElementById("charaMenu").style.display = "none";
  document.getElementById("charaYonda").style.display = "none";
  document.getElementById("charaBukatsu").style.display = "none";
  document.getElementById("charaPants").style.display = "none";
  document.getElementById("charaOshiete").style.display = "none";
  document.getElementById("charaNyan").style.display = "none";
  document.getElementById("charaOtouto").style.display = "none";
  document.getElementById("charaGannbaruzo").style.display = "none";
  document.getElementById("charaTabemono").style.display = "none";
  document.getElementById("charaType").style.display = "none";
  document.getElementById("charaUta").style.display = "none";
  document.getElementById("charaChoki").style.display = "none";
  document.getElementById("charaGu").style.display = "none";
  document.getElementById("charaPa").style.display = "none";
  document.getElementById("charaYobikomi").style.display = "none";
  document.getElementById("charaOshiete").style.display = "none";
  document.getElementById("charaShutoko").style.display = "none";
  vr_function();
}

//応答モーション 関数化したもの(saikawa, 2019/11/20)
function chara_action(action_name){
var wait = document.getElementById("Wait");
var action = document.getElementById(action_name);
var chara_action =　"chara" +　action_name;

isDefalttalking=false;
action.play();
flag_charaPlay = true;
document.getElementById("charaWait").style.display = "none"; //待機モーション消去
document.getElementById(chara_action).style.display = "block";

//再生終了後
action.addEventListener('ended', function (e) {
  document.getElementById(chara_action).style.display = "none";
  wait.play();
  document.getElementById("charaWait").style.display = "block";
  flag_charaPlay = false;
  vr_function();
}, false);
}

function defaultText(){
console.log("[log] voice recognition\n");
}

//スライド
function poster(slideNo){
$.ajax({
  type: "POST",
  url: "https://web.sfc.keio.ac.jp/~t16901ky/orf/getlog.php",
  data: {
      "comment": '{"id" :'+slideNo+'}'
  },
});
}

//音声認識メイン
function vr_function() {
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';
recognition.interimResults = true;
recognition.continuous = true;

//エラー;
recognition.onerror = function () {
  if (flag_speech == 0) vr_function();
};

//認識中断
recognition.onsoundend = function () {
  console.log("停止中");
  vr_function();
};

//認識成功
recognition.onresult = function (event) {
  var results = event.results;
  for (var i = event.resultIndex; i < results.length; i++) {
    if (results[i].isFinal) {
      //認識結果はグローバルで宣言
      rtnString = results[i][0].transcript;
      //認識結果コンソール表示
      console.log("【"+rtnString+"】");


      if (flag_charaPlay == true) {
        setTimeout("vr_function()", 500);
        //名前呼びかけ
      } else if (~rtnString.indexOf("名前")) {
        ex_name();
        } else if (~rtnString.indexOf("じゃんけん")) {
          ex_janken();
        } else if (~rtnString.indexOf("元のスライド") ) {
          ex_slide();
        } else if (~rtnString.indexOf("可視化") || ~rtnString.indexOf("痴漢")|| ~rtnString.indexOf("参加型センシング")) {
          poster(1);
          console.log("log-chikan");
          chara_action("Chikan");

        } else if (~rtnString.indexOf("プローブ情報システム") || ~rtnString.indexOf("コネクテッドカー") || ~rtnString.indexOf("ビッグデータ")|| ~rtnString.indexOf("ITS")) {
          poster(2);
          console.log("log-prove");
          chara_action("Prove");

        } else if (~rtnString.indexOf("バス列") || ~rtnString.indexOf("センシング")|| ~rtnString.indexOf("人流監視")){
          poster(3);
          console.log("log-bus");
          chara_action("Bus");

        } else if (~rtnString.indexOf("Bluetooth") || ~rtnString.indexOf("測位") || ~rtnString.indexOf("GPS")) {
          poster(4);
          console.log("log-miraikan");
          chara_action("Miraikan");

        } else if (~rtnString.indexOf("音声認識") || ~rtnString.indexOf("バーチャルエージェント") || ~rtnString.indexOf("MaaS") || ~rtnString.indexOf("LINE") || ~rtnString.indexOf("ツイッター")) {
          poster(5);
          console.log("log-idol");
          chara_action("Idol");

        } else if (~rtnString.indexOf("バスプローブ") || ~rtnString.indexOf("バスロケ") || ~rtnString.indexOf("デマンドバス")) {
          poster(6);
          console.log("log-keiiku");
          chara_action("Keiiku");

        } else if (~rtnString.indexOf("二酸化炭素")) {
          poster(7);
          console.log("log-co2");
          chara_action("Co2");

        } else if (~rtnString.indexOf("電車") || ~rtnString.indexOf("車両位置") || ~rtnString.indexOf("小田急")) {
          poster(8);
          console.log("log-densha");
          chara_action("Densha");

        } else if (~rtnString.indexOf("駅情報") || ~rtnString.indexOf("bot") || ~rtnString.indexOf("チャット")) {
          poster(9);
          console.log("log-bot");
          chara_action("Bot");

        } else if (~rtnString.indexOf("自己紹介") || ~rtnString.indexOf("誰")) {
          poster(12);
          console.log("log-jikoshoukai");
          chara_action("Jikoshoukai");

        } else if (~rtnString.indexOf("スマートスピーカー") || ~rtnString.indexOf("シグマ") || ~rtnString.indexOf("高齢者")) {
          poster(13);
          console.log("log-oshiete");
          chara_action("Oshiete");

        } else if (~rtnString.indexOf("AIKA") || ~rtnString.indexOf("アイカー") || ~rtnString.indexOf("インターネット自動車") || ~rtnString.indexOf("研究領域")) {
          poster(14);
          console.log("log-icar");
          chara_action("Icar");

        } else if (~rtnString.indexOf("アンケート") || ~rtnString.indexOf("タイトル")) {
          poster(34);

        } else if (~rtnString.indexOf("首都高") || ~rtnString.indexOf("東雲") || ~rtnString.indexOf("高速")) {
          poster(36);
          console.log("log-shutoko");
          chara_action("Shutoko");

        } else if (~rtnString.indexOf("交通情報")) {
          poster(37);

          //一致なしの場合
        } else {
          noMatch();
        }
    } else {
        console.log("[認識中] " + results[i][0].transcript);;
        flag_speech = 1;
    }
  }
}
//音声認識開始
flag_speech = 0;
console.log("認識開始");

function getJSON() {
  var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
  req.onreadystatechange = function() {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
    if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
//      alert(req.responseText);		          // 取得した JSON ファイルの中身を表示
  var text = JSON.parse(req.responseText);
  console.log(text["item"][0][0]);
  console.log(text["item"][0][1]);
  bus_position = Number(text["item"][0][3]);

  var position = document.getElementById("pos");
  position.innerHTML = "<font  size=\"7\" color=\"white\">今の位置情報は,緯度"+text["item"][0][0]+" ,経度"+text["item"][0][1]+"です...</font>";

  var update = document.getElementById("update");
  update.innerHTML = "<font  size=\"7\" color=\"white\">更新日時"+text["update"]+"</font>";
    }
  };

  req.open("GET", "https://vps1-net001.sfc.keio.ac.jp/sokankan", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
  req.send(null);					    // 実際にサーバーへリクエストを送信
}

var bus_location_check = function(){
  var s = [];
  s[0] = document.getElementById("0");
  s[1] = document.getElementById("1");
  s[2] = document.getElementById("2");
  s[3] = document.getElementById("3");
  s[4] = document.getElementById("4");

  getJSON();

  console.log("bus_position: " + bus_position);

  if (bus_position =>0){
      for(i=0;i<5;i++){
        s[i].style.backgroundColor = "transparent";
      }
      if (bus_position==0) {
        s[bus_position].style.backgroundColor = "red";
        before_bus_position=bus_position
      }else if (bus_position==before_bus_position+1) {
        s[bus_position].style.backgroundColor = "red";
        before_bus_position = bus_position
      }else if (bus_position==4) {
        s[before_bus_position+100].style.backgroundColor = "red";
      }
  }
}

setInterval(bus_location_check, 2000);


setTimeout(function(){
  if(flag_charaPlay == false){
    defaultText()}},4500);
  recognition.start();
}

/*document.addEventListener('keydown',face)
function face(){
  if(event.key_code!=0){
    chara_action("Greet");
    new Audio('konnitiha.mp3').play();
  }
console.log(event.keyCode);x
}*/

document.addEventListener('keydown',face)
function face(){
  if(event.key_code!=0){
    if (flag_charaPlay==ture){
      console.log("log-yobikomi");
      chara_action("Yobikomi");
    }
  }
}
