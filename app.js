// Init GitHub
const github = new Github;

// Init UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchuser');

//search event listner

searchUser.addEventListener('keyup', (e) => {
      const userText = e.target.value;

      if(userText !== ''){
            // console.log(userText);

            // Make HTTP call
            github.getUser(userText)
            .then(data => {
                  // console.log(data);
                  if (data.profile.message === 'Not Found') {
                        //show alert
                        ui.showAlert('user not found', 'alert alert-danger');
                  } else {
                        //show profile
                        ui.showProfile(data.profile);
                        // show repos
                        ui.showRepos(data.repos);
                  }
            })
      } else {
            // clear profile
            ui.clearprofile();
      }
})