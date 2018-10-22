var qtyAvail = document.getElementById("qtyAvail");
var countIn = document.getElementById("countIn");
var add = document.getElementById("add");
var totalIn = document.getElementById("totalIn");
var comp = document.getElementById("comp");
var countOut = document.getElementById("countOut");
var totalSold = document.getElementById("totalSold");
var gross = document.getElementById("gross");
var price = document.getElementById("price");
var comment = document.getElementById("comment");
var sumTotalIn = document.getElementById("sumTotalIn");
var sumComp = document.getElementById("sumComp");
var sumCountOut = document.getElementById("sumCountOut");
var sumGross = document.getElementById("sumGross");


console.log("connected");
console.log(price.textContent);

function mathFunction(){
	totalIn.textContent = Number(countIn.value) + Number(add.value);
	totalSold.textContent = Number(totalIn.textContent) - Number(countOut.value) - Number(comp.value);
	gross.textContent = "$" + Number(totalSold.textContent) * Number(price.textContent) + ".00";
	//Should be using a loop to loop through an object of totalin etc.
	sumTotalIn.textContent = Number(countIn.value) + Number(add.value);
	sumComp.textContent = Number(comp.value);
	sumCountOut.textContent = Number(countOut.value);
	sumGross.textContent = "$" + Number(totalSold.textContent) * Number(price.textContent) + ".00";

};

function moreFunction(){
	var form = document.forms.moreMenu;
	var inputPrice = form.inputPrice.value; 
	var inputComment = form.inputComment.value;
	price.textContent = inputPrice;
	comment.textContent = inputComment;
	mathFunction();
	return false;
};

$(function () {
  $('[data-toggle="popover"]').popover()
      container: 'body'
})
// $('.popover-dismiss').popover({
//   trigger: 'trigger'
// })


// countin.addEventListener("change", function(){
// 	totalin.textContent = Number(this.value) + Number(add.value);
// 	totalsold.textContent = Number(totalin.textContent) - Number(countout.value) - Number(comp.value);
// 	gross.textContent = "$" + Number(totalsold.textContent) * 10 + ".00";
// });

// add.addEventListener("change", function(){
// 	totalin.textContent = Number(this.value) + Number(countin.value);
// 	totalsold.textContent = Number(totalin.textContent) - Number(countout.value) - Number(comp.value);
// 	gross.textContent = "$" + Number(totalsold.textContent) * 10 + ".00";
// });

// comp.addEventListener("change", function(){
// 	totalsold.textContent = Number(totalin.textContent) - Number(countout.value) - Number(this.value);
// 	gross.textContent = "$" + Number(totalsold.textContent) * 10 + ".00";
// });

// countout.addEventListener("change", function(){
// 	totalsold.textContent = Number(totalin.textContent) - Number(comp.value) - Number(this.value);
// 	gross.textContent = "$" + Number(totalsold.textContent) * 10 + ".00";
// });