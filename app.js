var arry =["pizza","biryani","mitthai","raita" , "tikka","kabab", "sandwich" , "ice cream " ,"orange juice" , "soft drink"]
var search = prompt("ENTER FOOD NAME")
D= search.toLocaleLowerCase()
var falg =false;
for(i=0 ; i<arry.length; i++){
    if(D=== arry[i]){
        document.write("<h1>" + [i] +") " + arry[i]+ " is available")
        falg = true
        break;
    }
 
}
if(falg=== false){
    document.write(search +" is not availabel")
}
    document.write( " <br >    The item given below is also available:   <br> => orange juice <br> => Ice cream <br> => soft drinks ")


