    function talk(){
  let know = {
    "Hi" : "Hello!",

    "Hello" : "Hello!",

    "What is e-waste?" : "Electronic waste or E-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered E-waste. ",
    
    "What is ewaste?" : "Electronic waste or E-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered E-waste. ",
    
    "What is e-waste" : "Electronic waste or E-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered E-waste. ",
    
    "What is ewaste" : "Electronic waste or E-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered E-waste. ",

    "How can we reduce ewaste?" : " To reduce e waste, use recycled parts to make new products. And if you are already doing it, thats great!! " ,

    "How can we reduce e-waste?" : " To reduce e waste, use recycled parts to make new products. And if you are already doing it, thats great!! " ,

    "How can we reduce ewaste" : " To reduce e waste, use recycled parts to make new products. And if you are already doing it, thats great!! " ,

    "How can we reduce e-waste" : " To reduce e waste, use recycled parts to make new products. And if you are already doing it, thats great!! " ,

    "Is e-waste a problem?": "Electronic waste 🗑️ contains toxic components that are dangerous to human health, such as mercury, lead, cadmium, polybrominated flame retardants, barium and lithium. The negative health effects of these toxins on humans include brain, heart, liver, kidney and skeletal system damage.",

    "Is e-waste a problem": "Electronic waste 🗑️ contains toxic components that are dangerous to human health, such as mercury, lead, cadmium, polybrominated flame retardants, barium and lithium. The negative health effects of these toxins on humans include brain, heart, liver, kidney and skeletal system damage.",

    "Is ewaste a problem": "Electronic waste 🗑️ contains toxic components that are dangerous to human health, such as mercury, lead, cadmium, polybrominated flame retardants, barium and lithium. The negative health effects of these toxins on humans include brain, heart, liver, kidney and skeletal system damage.",

    "Is ewaste a problem?": "Electronic waste 🗑️ contains toxic components that are dangerous to human health, such as mercury, lead, cadmium, polybrominated flame retardants, barium and lithium. The negative health effects of these toxins on humans include brain, heart, liver, kidney and skeletal system damage.",

    "What actions should the government take?" : "The government should provide market information regarding e-waste prices. They should incentivise formal e-waste recycling and they should deploy readily available and mature recycling technology.",

    "What actions should the government take" : "The government should provide market information regarding e-waste prices. They should incentivise formal e-waste recycling and they should deploy readily available and mature recycling technology.",

    "What should we do with e-waste?" : "Reduce, reuse, and recycle ♻️ . Reduce your generation of e-waste through smart procurement and good maintenance. Its all for a good cause.",

    "What should we do with ewaste?" : "Reduce, reuse, and recycle ♻️ . Reduce your generation of e-waste through smart procurement and good maintenance. Its all for a good cause.",

    "What should we do with e-waste" : "Reduce, reuse, and recycle ♻️ . Reduce your generation of e-waste through smart procurement and good maintenance. Its all for a good cause.",
    
    "What should we do with ewaste" : "Reduce, reuse, and recycle ♻️ . Reduce your generation of e-waste through smart procurement and good maintenance. Its all for a good cause.",

    "Bye" : "Bye! I hope you enjoyed the conversation! 👋",  


    "Thanks" : "😊",    
    
    "Thank you" : "😊",
    
    "Ty" : "😊"
  };
  
  const newObj = Object.fromEntries(
    Object.entries(know).map(([k, v]) => [k.toLowerCase(), v])
  );

  let user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    let newUser = user.toLowerCase()
  if (newUser in newObj) {
    document.getElementById('chatLog').innerHTML = newObj[newUser] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry, I couldn't quite get that. Could you please ask another question? <br>";
  }
}
