const question = ["Why do we tell actors to “break a leg?”", "I invented a new word! ", "Did you hear about the mathematician who’s afraid of negative numbers? ","Helvetica and Times New Roman walk into a bar.",'Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”','Hear about the new restaurant called Karma?','A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”','Did you hear about the actor who fell through the floorboards?'
]
const joke=[" Because every play has a cast.","Plagiarism!","He’ll stop at nothing to avoid them.",'“Get out of here!” shouts the bartender. “We don’t serve your type.”','Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house. Don’t miss these hilarious egg puns that will absolutely crack you up.','There’s no menu: You get what you deserve.','“Don’t worry,” said the doc. “Those are just contractions.”','He was just going through a stage.']
function myFunction() {
  let ran = Math.floor(Math.random() * 7);
  document.getElementById("question").innerHTML = question[ran];
  document.getElementById("joke").innerHTML = joke[ran];
  
}
