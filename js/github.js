class Github {
  constructor() {
    this.client_id = '11ddca045ca689dbc274';
    this.client_secret = 'c9fd72b65f09fcd61728a1179bd677e3630f609c';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();

    return {
      profile: profileData,
    };
  }
}
