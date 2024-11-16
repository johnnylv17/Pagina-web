function tablas(){
    let resp="",tab="",ini="",fin="",r=0,msg=""
    tab = document.getElementById("tabla").value
    ini = document.getElementById("inicio").value
    fin = document.getElementById("final").value
    resp= document.getElementById("obs")
    tab=parseInt(tab)
    ini=parseInt(ini)
    fin=parseInt(fin)
    while (ini <= fin){
      r = ini*tab
  
      msg = msg + `${ini}*${tab}=${r}`+"\n"
      ini=ini+1
    }
    resp.innerHTML=msg
  }
