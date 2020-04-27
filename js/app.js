/* eslint-disable no-undef */
// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event  Listener
searchUser.addEventListener('keyup', e => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP Call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //  Show Alert
      } else {
        //  Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear Profile
  }
});
