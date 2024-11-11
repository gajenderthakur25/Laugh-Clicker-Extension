fetch('https://icanhazdadjoke.com/slack')
 .then(response => response.json())
  .then((jokedata)=>{
    const text=jokedata.attachments[0].text
    const ele=document.querySelector('#para')
    ele.innerHTML=text;
})