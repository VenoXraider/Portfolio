function submitForm() {
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var whatsapp = document.getElementById("whatsapp").value;

    // Create a new FormData object
    var formData = new FormData();
    formData.append("Name", name);
    formData.append("Company", company);
    formData.append("Email", email);
    formData.append("WhatsApp", whatsapp);

    // Send data to Google Sheets using Fetch API
    fetch("https://script.google.com/macros/s/AKfycbxL9Hq_Yzuus1zTQRAu2HxhiVr6KA6rq77dHkC5w_0BnK9ZBkYMQOPIeVtYerCQVi1RWA/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Form submitted successfully:", data);
        // You can add further actions after successful submission if needed
    })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
}
