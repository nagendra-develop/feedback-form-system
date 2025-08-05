function showPopup(message, isError = false) {
  const popup = document.getElementById("popupMessage");
  popup.textContent = message;
  popup.classList.remove("hidden");
  popup.classList.toggle("error", isError);

  setTimeout(() => {
  popup.classList.add("hidden");
  popup.classList.remove("error");
}, 60 * 60 * 1000); // Hides after 60 minutes (60 * 60 * 1000 ms)

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
      const data = { name, email, message }; // ✅ only define once here
      const res = await fetch("http://127.0.0.1:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok) {
        showPopup("Your feedback has been successfully recorded!");
        document.getElementById("feedbackform").reset();
      } else {
        showPopup(result.message || "Something went wrong. Try again!", true);
      }

    } catch (err) {
      showPopup("Something went wrong. Try again!", true);
      console.error(err);
    }
  });
});
