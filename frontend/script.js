function showPopup(message, isError = false) {
  const popup = document.getElementById("popupMessage");
  popup.textContent = message;
  popup.classList.remove("hidden");
  popup.classList.toggle("error", isError);

  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("error");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("feedbackform").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showPopup("Please fill all fields!", true);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();
      
      if (res.ok) {
  showPopup("Your feedback has been successfully recorded!");
  document.getElementById("feedbackform").reset();
} else {
  showPopup(data.message || "Something went wrong. Try again!", true);
}

}catch (err) {
      showPopup("Something went wrong. Try again!", true);
      console.error(err);
    }
  });
});
