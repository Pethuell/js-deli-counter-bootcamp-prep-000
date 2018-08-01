function takeANumber(line, newPerson) {
  
  line.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if(line.length !== 0) {
    
    return `Currently serving ${line.shift()}.`;
  
  } else {
    
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var holder = [];
  let j = 0;
  if(line.length !== 0) {
    
    return holder;
  } else {
    return "The line is currently empty.";
  }
}