var mybtn = document.getElementsByTagName("button");
var myP = document.getElementsByTagName("p");
mybtn[0].onclick = () => {
  if (myP[0].className == "blue") {
    myP[0].setAttribute("class", "red");
  } else {
    myP[0].setAttribute("class", "blue");
  }
};
