document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
    const editForm = document.getElementById("edit-booking-form");
    const bookingDetails = document.getElementById("booking-details");
    const editDetails = document.getElementById("edit-form");
    const editButton = document.getElementById("edit-button");
    let currentBooking = null;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Handle form submission to add new booking
        // ...
    });

    editButton.addEventListener("click", function () {
        if (currentBooking) {
            // Populate the edit form with the current booking details
            document.getElementById("edit-name").value = currentBooking.name;
            document.getElementById("edit-email").value = currentBooking.email;
            document.getElementById("edit-mobile").value = currentBooking.mobile;
            editDetails.style.display = "block";
        }
    });

    editForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Handle form submission to update the booking details
        const updatedName = document.getElementById("edit-name").value;
        const updatedEmail = document.getElementById("edit-email").value;
        const updatedMobile = document.getElementById("edit-mobile").value;

        // Update the current booking with the new details
        currentBooking.name = updatedName;
        currentBooking.email = updatedEmail;
        currentBooking.mobile = updatedMobile;

        // Display the updated booking details
        displayBookingDetails(currentBooking);

        // Hide the edit form
        editDetails.style.display = "none";
    });

    // Function to display booking details
    function displayBookingDetails(booking) {
        const bookingInfo = `
            <h2>Booking Details:</h2>
            <p><strong>Name:</strong> ${booking.name}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Mobile Number:</strong> ${booking.mobile}</p>
        `;
        bookingDetails.innerHTML = bookingInfo;
    }
});
