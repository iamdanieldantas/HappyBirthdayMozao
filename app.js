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
    {title:"Quando fomos ao cinema", text:"No dia anterior tínhamos terminado (por 1h) mas percebemos que não conseguimos ficar separados. Amo essa foto porque ela mostra o quanto nos amamos", img:"images/Image (2).png"},
    {title:"Cozinhando juntos", text:"Nesse dia 'nós' fizemos macarrão, que por sinal estava uma delícia. Essa foto poética retrata a profundidade e a beleza do nosso amor ", img:"images/Image (3).png"},
    {title:"Sou tão apaixonado por você", text:"Essa foto foi a que eu postei porque não aguentava mais não te mostrar pro mundo. Sou tão apaixonado meu tudo...", img:"images/Image (4).png"},
    {title:"Feliz aniversário, mozao", text:"Você é uma pessoa tão especial pra mim. Nunca senti o que sinto por você por ninguém. Desejo que Deus te dê muitos anos de vida e que todos sejam ao meu lato. Te amo meu tudo <3", img:null}
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
