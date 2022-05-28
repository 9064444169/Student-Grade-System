function calculate(){
   var a= parseInt(document.getElementById('bookone').value);
   var b= parseInt(document.getElementById('booktwo').value);
   var c= parseInt(document.getElementById('bookthree').value);
   var d= parseInt(document.getElementById('bookfour').value);
   var e= parseInt(document.getElementById('bookfive').value);
   var f= parseInt(document.getElementById('booksix').value);

   if (a>100 || b>100 || c>100 || d>100 || d>100 || e>100 || f>100){
       alert("***Enter Correct Value***")
   }
   else{
       var obtain=a+b+c+d+e+f;
       document.getElementById('obtain').innerHTML=obtain;
       var per=obtain/600*100;
       document.getElementById('per').innerHTML=per;
       if (a>40 && b>40 && c>40 && d>40 && d>40 && e>40 && f>40){
        document.getElementById('remark').innerHTML="<span style='color:green'>Pass</span>";
       }
       else{
        document.getElementById('remark').innerHTML="<span style='color:red'>Fail</span>";
       }

        if (per>=80){
           document.getElementById('grade').innerHTML="A";
       }
        else if (per>=70){
        document.getElementById('grade').innerHTML="B";
      }
        else if (per>=60){
        document.getElementById('grade').innerHTML="C";
     }
      else if (per>=50){
        document.getElementById('grade').innerHTML="D";
    }
    else if (per>=40){
        document.getElementById('grade').innerHTML="E";
    }
    else{
        document.getElementById('grade').innerHTML="F";
    }
    }
}

function prints(){
    window.print();
}