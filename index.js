function takeANumber(line, newPerson) {
  
  line.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if(line.length !== 0) {
    var nextUp = line.shift();
    return `Currently serving ${nextUp}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var holder = "The line is currently: ";
  let j = 0;
  
  if(line.length !== 0) {
    
    while(j < line.length) {
      holder = holder + (j+1) + ". " + line[j];
      
      if(line[j+1]){
        holder = holder + ", "
      }
      
      j++;
    }
    return holder;
  } else {
    return "The line is currently empty.";
  }
}