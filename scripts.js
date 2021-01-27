var data = {};
const uri = "http://localhost/api.php";

function makeRequest(uri){
    httpRequest = new XMLHttpRequest();
    if(!httpRequest){
        return false;
    }
    fetch(uri).then(function(httpRequest) {
        httpRequest.text().then(function(text) {
          data = text;
        })
        .then(function(){
            data = JSON.parse(data);
            console.log(data);

            var fragment = new DocumentFragment();
            var container = document.getElementById("msgs");

            var count = Object.keys(data).length;
            for(var i=count-1; i > 0; i--){
                var msg = document.createElement("div")
                msg.className = "msg";
                var text = document.createTextNode(data[i]["time"] + "   |   " + data[i]["data"]);
                msg.appendChild(text);
                fragment.appendChild(msg);
                container.appendChild(fragment);
                console.log(data[i]["data"]);
            }
        });
      });
}

makeRequest("http://localhost/api.php");
