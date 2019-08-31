function getHoroscope(dt) { 
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var n = new Date();
    var y = n.getFullYear(); 
    var m = n.getMonth();
    var d = n.getDate(); 
    var d1 = d-7;
    // alert(dt)
    document.getElementById("date").style.font = "italic bold 30px arial,serif";
    document.getElementById("date").innerHTML = d + " " + months[m] + " " + y;
    if(dt == 'gsx$month'){
      document.getElementById("date").innerHTML =  months[m] + " " + y;
    }
    else if(dt == 'gsx$today'){
      document.getElementById("date").innerHTML = d + " " + months[m] + " " + y;
    }
    else{
      document.getElementById("date").innerHTML = d + "-"+  d1 + " " + months[m] + " " + y;
    }

    var str = '';
    axios.get('https://spreadsheets.google.com/feeds/list/1GsZAXEMPH8pPcHi5ok7K4UaWAOttq4-nC-4Pl-ZP-2s/od6/public/values?alt=json')
        .then(res => { 
      
        
            for (i = 0; i < res.data.feed.entry.length; i++){
              //temp = res.data.feed.entry[i].gsx$today;
              //temp1 = temp.q;
               
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
  
    <h5 class="modal-title text-white" id="exampleModalLongTitle">${res.data.feed.entry[i].gsx$name.$t}</h5>
   
    
  </div>
  <div class="modal-body">
  ${res.data.feed.entry[i][dt].$t}
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
          // }
          // else{
          //   document.getElementById('show').innerHTML = "please select other date";
          // }
          
        })
        .catch(e => {
            console.log(e) 
        })
}

