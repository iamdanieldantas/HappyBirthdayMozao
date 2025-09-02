(function(){
  const PW = "040725";
  const pw = document.getElementById("pw");
  const login = document.getElementById("login");
  const pager = document.getElementById("pager");
  const err = document.getElementById("err");

  function unlock(){
    if(pw.value.trim()===PW){
      login.style.display='none';
      pager.style.display='block';
      render();
    } else {
      err.style.display='block';
      setTimeout(()=>err.style.display='none',1500);
    }
  }

  document.getElementById("enter").addEventListener("click", unlock);
  document.getElementById("show").addEventListener("click", ()=>{
    pw.type = pw.type==='password'?'text':'password';
  });
  pw.addEventListener("keydown", e=>{ if(e.key==='Enter') unlock(); });

  const data=[
    {title:"Primeira vez que você me levou em casa", text:"Nesse dia passamos a noite juntos e você tinha que ir trabalhar, mas foi me deixar em casa antes e eu já morrendo de saudade do meu dengo", img:"images/Image (1).png"},
    {title:"Tide of Laughter", text:"You and me, collecting inside jokes like seashells. I love how your smile changes the tide of any day.", img:"images/Image (2).png"},
    {title:"Chocolate Break", text:"Life pro tip: break chocolate, not hearts. Today I’m breaking all the rules to spoil you just a little more.", img:"images/Image (3).png"},
    {title:"Sweet & Salty", text:"From salty sea breeze to sweet chocolate kisses—here’s to our perfect flavor combo.", img:"images/Image (4).png"},
    {title:"Only Words", text:"No photo, just truth: I’m so proud of the man you are. Thank you for loving me in ways big and small. Happy Birthday, meu amor. To more beaches, more chocolate, and more ♥.", img:null}
  ];

  let i=0;
  function render(){
    const d=data[i];
    if(d.img){
      document.getElementById("stage").innerHTML =
        '<div class="grid">'
        + '<div class="photo"><img src="'+d.img+'" alt=""/></div>'
        + '<div class="text"><h2>'+d.title+' ✨</h2><p>'+d.text+'</p></div>'
        + '</div>';
    } else {
      document.getElementById("stage").innerHTML =
        '<div class="text" style="text-align:center">'
        + '<h2>'+d.title+' ✨</h2><p>'+d.text+'</p>'
        + '</div>';
    }
    document.getElementById("counter").textContent = (i+1)+"/"+data.length;
  }

  document.getElementById("prev").addEventListener("click",()=>{ i=(i-1+data.length)%data.length; render(); });
  document.getElementById("next").addEventListener("click",()=>{ i=(i+1)%data.length; render(); });

  document.addEventListener("keydown", function(e){
    if(pager.style.display==='block'){
      if(e.key==='ArrowRight') document.getElementById("next").click();
      if(e.key==='ArrowLeft') document.getElementById("prev").click();
    }
  });
})();
