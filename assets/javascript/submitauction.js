

  // Sets firebase database
  var database = firebase.database();
   

  
  
    
	
  // OnClick for form
  $("#submit").on("click", function(){
  //prevent default
  event.preventDefault();  
  
  // Get input from user & store in variables
  itemName = $("#itemName").val().trim();
  ownerName =  $("#ownerName").val().trim();
  auctionPrice =  $("#auctionPrice").val().trim();
  expirationDate =  $("#expirationDate").val().trim();
  
  console.log("Item Name: " +itemName);
  console.log("Owner Name: " +ownerName);
  console.log("Price: " +auctionPrice);
  console.log("Expiration Date: " +expirationDate);
  
  // Creates variables to connect to firebase
  var itemInfo = {
	  itemName: itemName,
	  ownerName: ownerName,
	  auctionPrice: auctionPrice,
		expirationDate: expirationDate,
		
	};

  // Pushes trainInfo to database
  database.ref().push(itemInfo);
  

  clearForm()
  
  });
  
  function clearForm() {
	  document.getElementById("itemForm").reset();
  };
  
  database.ref().on("child_added", function(childSnapshot) {
	  console.log(childSnapshot.val());
	
	  // Store everything into a variable.
	  itemName = childSnapshot.val().itemName;
	  ownerName = childSnapshot.val().ownerName;
	  auctionPrice = childSnapshot.val().auctionPrice;
	  expirationDate = childSnapshot.val().expirationDate;
	
	  // Train Info
	  console.log(itemName);
	  console.log(ownerName);
	  console.log(auctionPrice);
	  console.log(expirationDate);
	  
	  
	 
		// Creates the new row
	  var newRow = $("<tr>").append(
		$("<td>").text(itemName),
		$("<td>").text("$" +auctionPrice),
		$("<td>").text(ownerName),
		$("<td>").text(highBidder),
		$("<td>").text("$" +highPrice),
		$("<td>").text(expirationDate),
	   
	  );
		newRow.attr("data", itemName).addClass("bidData").attr("data-ownerName", ownerName).attr("data-auctionPrice", auctionPrice).attr("data-expirationDate", expirationDate);
	  // Append the new row to the table
	  $("#mainSchedule > tbody").append(newRow);
	  
	});
	
	function displayTime () {
	  var currentTime = moment().format('MMM Do YYYY, h:mm:ss a');
	  $("#currentTime").text(currentTime);
  
	}
    setInterval(displayTime, 1000);


$("#mainSchedule").on('click' , "tr", function(event) {
	$("#bidItem").text($(this).attr('data'))
	$("#highest-bidder").text($(this).attr('data-ownerName'))
	$("#highest-price").text($(this).attr('data-auctionPrice'))
	
	console.log($(this).attr('data'))
	// 'data-ownerName', 'data-auctionPrice', 'data-expirationDate'));
})