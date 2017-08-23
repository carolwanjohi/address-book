// Back-end

// Constructor 
function Contact(first, last, email) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.addresses = [];
}

function Address(street, city, county) {  
    this.street = street;
    this.city = city;
    this.county = county;
}

// Prototype
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
    return this.street + ", " + this.city + ", " + this.county;
}

// Function
function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-email").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");
    $("#typeOfAddress").val("");
    $("option.none").val("");
    $("option.homeAddress").val("");
    $("option.workAddress").val("");
}

// Front-end
$(document).ready(function() {

    $("#add-address").click(function() {
    $("#new-addresses").append(
        '<div class="new-address">' + 
            '<div class="form-group"' +
            '<label for="typeOfAddress">Type of Address</label>' + 
            '<select class="form-control" id="typeOfAddress">'+
                '<option class="none">None</option>' + 
                '<option class="homeAddress">Home</option>' + 
                '<option class="workAddress">Work</option>' + 
            '</select>' + 
        '</div>'+

        '<div class="form-group">' +
           '<label for="new-street">Street</label>' +
           '<input type="text" class="form-control new-street">' +
         '</div>' +

         '<div class="form-group">' +
           '<label for="new-city">City</label>' +
           '<input type="text" class="form-control new-city">' +
         '</div>' +

         '<div class="form-group">' +
           '<label for="new-county">County</label>' +
           '<input type="text" class="form-control new-county">' +
         '</div>' +

        '</div>');
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var inputtedEmail = $("input#new-email").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail);
        console.log(newContact);

        $("ul#contacts").append("<li><span class='contact'>" + 
          newContact.fullName() + "</span></li>");


        // var inputtedTypeOfAddress = $("#typeOfAddress").val();

        $(".new-address").each(function() {
          var inputtedStreet = $(this).find("input.new-street").val();
          var inputtedCity = $(this).find("input.new-city").val();
          var inputtedCounty = $(this).find("input.new-county").val();

          var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
          
          newContact.addresses.push(newAddress);
        });

        $(".contact").last().click(function() {
          $("#show-contact").show();
          $("#show-contact h2").text(newContact.firstName);
          $(".first-name").text(newContact.firstName);
          $(".last-name").text(newContact.lastName);
          $(".emailAddress").text(newContact.email);
          // $("#typeOfAddressInput").text(inputtedTypeOfAddress);
          $("ul#addresses").text("");
          newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
          });
        });

        resetFields();
        // $('.toBeRemoved').remove("#");
    });
});




  
