document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
    const bookingDetails = document.getElementById("booking-details");
                        

    form.addEventListener("submit", function (event) {
        event.preventDefault();
      
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        
        const bookingInfo = `
            <h2>Booking Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
       
        bookingDetails.innerHTML = bookingInfo;
        form.addEventListener("delete", function (event) {
            event.preventDefault();
        });
});
});