    function talk(){
  let know = {
    "Hi daddy" : "Hello son.",
    "How are you daddy" : "Good :)",
    "What can i do for you daddy" : "sugoma",
    "ok daddy" : "Thank You So Much son <3",
    "Bye" : "Okay! Will meet soon. TC:).."
  };
  
  const newObj = Object.fromEntries(
    Object.entries(know).map(([k, v]) => [k.toLowerCase(), v])
  );

  let user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in newObj) {
    document.getElementById('chatLog').innerHTML = newObj[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry, I couldn't quite get that. Could you please ask another question? <br>";
  }
}