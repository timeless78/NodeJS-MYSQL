function doJob(text) {
  document.querySelector('article').innerHTML=text;
}

function onResponse(resp){
  resp.text().then(doJob);
}

function doFetch(f){
  fetch(f).then(onResponse)
}