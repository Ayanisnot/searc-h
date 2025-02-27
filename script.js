var str = "hello how are you doing for the day";
  
           var search_position = str.search("doing");
           var txt = str.replace("how are" , "how are you")
           var x = 70;
           var y = 90;
           document.getElementById("searchresult").innerHTML = search_position;
           document.getElementById("replaceresult").innerHTML = txt;
           document.getElementById("stringresult").innerHTML = String(x) , String(y); 