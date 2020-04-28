/* eslint-disable no-undef */
// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search Input Event  Listener
searchUser.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Clear Profile
        ui.clearProfile();
        //  Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //  Show Profile
        ui.clearAlert();
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
