function sendLog(){
          var postData = {"comment":rtnString, "answer":balloon_text};
          $.post("idol_log.php", postData);
          console.log("<対話ログ送信>");
          }
