//グローバル変数宣言
var flag_speech = 0;
var flag_charaPlay = false;
var text;
var num;
var start_flag = 0;

//初期設定：動画消去、ここにWait以外を書いていく
function charaHide() {
  document.getElementById("charaRassera").style.display = "none";
  document.getElementById("chara50").style.display = "none";
  document.getElementById("charaOsusume").style.display = "none";
  document.getElementById("charaShinano").style.display = "none";

  var thread = new Thread(vr_function());
  thread.execute();
}

//応答モーション 関数化したもの(saikawa, 2019/11/20)
function chara_action(action_name){
  var wait = document.getElementById("Wait");
  var action = document.getElementById(action_name);
  var chara_action =　"chara" +　action_name;

  console.log(action_name);
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

        if (~rtnString.indexOf("名前")) {
          console.log("Shinano");
          chara_action("Shinano");
        } else if (~rtnString.indexOf("おすすめのりんご")) {
          console.log("Osusume");
          chara_action("Osusume");
        } else if (~rtnString.indexOf("品種")) {
          console.log("50");
          chara_action("50");
        } else if (~rtnString.indexOf("ねぶた")) {
          console.log("Rassera");
          chara_action("Rassera");
/*
        // } else if (~rtnString.indexOf("うるさい")) {
          console.log("Silent");
          chara_action("Basusyanai");
        // } else if (~rtnString.indexOf("雨")) {
          console.log("Ame");
          chara_action("Ame");
        // } else if (~rtnString.indexOf("傘")) {
          console.log("Kasa");
          chara_action("Kasa");
        // } else if (~rtnString.indexOf("換気")) {
          console.log("kuuki");
          chara_action("Kuuki");
        // } else if (~rtnString.indexOf("地震")) {
          console.log("Hinan");
          chara_action("Hinan");
*/
          //一致なしの場合
        } else {
          //        noMatch();
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
  recognition.start();
}
