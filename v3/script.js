function getQuerys(){
  try {
    var qs = window.location.href.split("?")[1].split("#")[0]
    try{
      var qe = qs.split("&")
    }catch(e){
      var qe=[qs]
    }
    var res = {}
    for(var e in qe){
      res[qe[e].split("=")[0]] = qe[e].split("=")[1]
    }
    return res
  } catch(e){window.location.href = '/v3/crashed.html#:'+Date.now()+':#e!'+e.stack}
  }
function sessionCheck(){
  try {
    var sessioniter = undefined
    var s_done = false
    try{
      if((parseInt(window.location.href.split("#")[1])<=Date.now()-10000) || (window.location.href.split("#")[1]==undefined)){
        window.location.href="/v3/uncorrect.html#"+Date.now()
      }
    }catch(e){
      window.location.href="/v3/unchecked.html#"+Date.now()
    }
    if(s_done == false){
      var sessioninter = setInterval('window.location.href=window.location.href.split("#")[0]+"#"+Date.now()', 3000)
      var s_done = true
    }
  } catch(e){window.location.href = '/v3/crashed.html#:'+Date.now()+':#e!'+e.stack}
}
function sessionCheckC(){
  try {
    var sessioniter2 = undefined
    try{
      if((parseInt(window.location.href.split("#:")[1].split(":#")[0])<=Date.now()-10000) || (window.location.href.split("#:")[1].split(":#")[0]==undefined)){
        window.location.href="/v3/uncorrect.html#"+Date.now()
      }
    }catch(e){
      window.location.href="/v3/unchecked.html#"+Date.now()
    }
    if(sessioniter2 == undefined){
      var sessioninter2 = setInterval('window.location.href=window.location.href.split("#:")[0]+"#:"+Date.now()+":#"+window.location.href.split(":#")[1]', 3000)
    }
  } catch(e){window.location.href = '/v3/crashed.html#:'+Date.now()+':#e!'+e.stack}
}