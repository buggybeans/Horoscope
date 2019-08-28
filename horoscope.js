function getHoroscope() { 
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();
    document.getElementById("date").innerHTML = d + " " + months[m] + " " + y;
    var str = '';
    axios.get('https://spreadsheets.google.com/feeds/list/1GsZAXEMPH8pPcHi5ok7K4UaWAOttq4-nC-4Pl-ZP-2s/od6/public/values?alt=json')
        .then(res => {
            for (i = 0; i < res.data.feed.entry.length; i++){
              str+=`<div class="mx-auto  mt-3 border border-danger ">
            <div class="hovereffect">
                <img class="img-responsive" src="${res.data.feed.entry[i].gsx$link.$t}" style="height: 150px; width: 150px;" 
                alt="">
                <div class="overlay">
                   <h2>${res.data.feed.entry[i].gsx$name.$t} </h2>
                   <a class="info" href="#"><button type="button" class="btn btn-dark" data-toggle="modal" data-target="#abc${res.data.feed.entry[i].gsx$name.$t}">
Show
</button></a> 

<div class="modal fade" id="abc${res.data.feed.entry[i].gsx$name.$t}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content bg-dark">
  <div class="modal-header mx-auto">
  
    <h5 class="modal-title bg-warning text-dark" id="exampleModalLongTitle">${res.data.feed.entry[i].gsx$name.$t}</h5>
   
    
  </div>
  <div class="modal-body">
      ${res.data.feed.entry[i].gsx$desc.$t}
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok!</button>
    
  </div>
</div>
</div>
</div>
                </div>
            </div>
        </div>

        `
        
                //str += `${res.data.feed.entry[i].gsx$name.$t} <---> ${res.data.feed.entry[i].gsx$desc.$t} <---> ${res.data.feed.entry[i].gsx$link.$t}<br>`;
            }
            document.getElementById('show').innerHTML = str;
        })
        .catch(e => {
            console.log(e) 
        })
}