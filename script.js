function talk(){
  const answers = {
    "hi" : "Hello!",
    "hello" : "Hello!",
    "hey" :"Hello",
    "aboutewaste" : "Electronic waste or E-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered E-waste. ",
    "whatisewaste" : "Electronic waste or E-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered E-waste. ",
    "reduceewaste" : " To reduce e waste, use recycled parts to make new products. And if you are already doing it, thats great!! " ,
    "ewasteaproblem": "Electronic waste 🗑️ contains toxic components that are dangerous to human health, such as mercury, lead, cadmium, polybrominated flame retardants, barium and lithium. The negative health effects of these toxins on humans include brain, heart, liver, kidney and skeletal system damage.",
    "whatshouldthegovernmentdo" : "The government should provide market information regarding e-waste prices. They should incentivise formal e-waste recycling and they should deploy readily available and mature recycling technology.",
    "whatactionsshouldthegovernmenttake" : "The government should provide market information regarding e-waste prices. They should incentivise formal e-waste recycling and they should deploy readily available and mature recycling technology.",
    "whatshouldwedowithewaste" : "Reduce, reuse, and recycle ♻️ . Reduce your generation of e-waste through smart procurement and good maintenance. Its all for a good cause.",
    "bye" : "Bye! I hope you enjoyed the conversation! 👋",  
    "thanks" : "😊",    
    "thank you" : "😊",
    "ty" : "😊"
};


  const userInput = document.getElementById('userBox').value;
  const sanitizedUserInput = userInput.trim().toLowerCase().replace("-", "").replace("?", "").replace(/ /g, "")  //remove spaces from start and end of input, make it lowercased, and replace - with empty strings. making strings like "e-waste" into "ewaste".

  // document.getElementById('chatLog').innerHTML = userInput + "<br>";

  for(const answersKey in answers){
    if(sanitizedUserInput.includes(answersKey)){
      document.getElementById('chatLog').innerHTML = answers[answersKey] + "<br>";
      break;
    }
    else{
  document.getElementById('chatLog').innerHTML = "Sorry, I couldn't quite get that. Could you please ask another question? <br>";
}
  }
}


