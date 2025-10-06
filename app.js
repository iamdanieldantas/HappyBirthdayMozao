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
    {title:"Mozao, ta funcionando?", text:"Que date incrível que tivemos hein. Que casalzão que somos... Obrigado por tudo, gatinho", img:"images/Image (6).png"},
    {title:"O Aniversário é seu mas o presente é meu", text:"Separei algumas recordações nossas. Ta pronto?", img:"images/Image.png"},
	  {title:"Primeira vez que você me levou em casa", text:"Nesse dia passamos a noite juntos e você tinha que ir trabalhar, mas foi me deixar em casa antes e eu já morrendo de saudade do meu dengo", img:"images/Image (1).png"},
    {title:"Quando fomos ao cinema", text:"No dia anterior tínhamos terminado (por 1h) mas percebemos que não conseguimos ficar separados. Amo essa foto porque ela mostra o quanto nos amamos", img:"images/Image (2).png"},
    {title:"Cozinhando juntos", text:"Nesse dia 'nós' fizemos macarrão, que por sinal estava uma delícia. Essa foto poética retrata a profundidade e a beleza do nosso amor ", img:"images/Image (3).png"},
    {title:"Nossa comemoração de 2 meses", text:"Confesso que a foto não ficou tão boa, mas aquela noite foi incrível. Estar com você me faz bem, o tempo passa e eu não percebo. Quero isso pro resto da vida", img:"images/Image (5).png"},
    {title:"Feliz aniversário, mozao", text:"Quero reforçar que você é uma pessoa especial pra mim e que sou louco por você. Desejo que Deus te dê muitos anos de vida e que todos sejam ao meu lato. Te amo meu tudo <3", img:null}

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
