export default function editProfile(s) {
    const main = document.getElementById("main-content");
    main.innerHTML = `
  <main class="profile-container">
      <section class="profile-section">
        <header class="profile-header">
          <img class="profile-pic" id="profilePic" src="./assets/others/profile.jpg" alt="profile picture">
          <section class="profile-header-top">
            <article class="profile-info">
              <h3 class="full-name" id="fullName">Jennie Kim</h3>
              <!-- Three Dots Icon -->
              <div class="three-dots-wrapper">
                <svg id="menuToggle" class="three-dots-icon" viewBox="0 0 16 16">
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>

                <!-- Dropdown Menu -->
                <div id="dropdownMenu" class="dropdown-menu">
                  <a href="edit-profile.html" class="dropdown-item">Edit Profile</a>
                  <a href="#" class="dropdown-item">Settings</a>
                  <a href="#" class="dropdown-item">Log Out</a>
                </div>
              </div>

              <h2 class="username" id="username">@jennierubyjane</h2>
            </article>
            <article class="rate">
              <div class="post-count"><span style="font-weight:bold">123</span> posts</div>
              <div class="post-likes"><span style="font-weight:bold">123</span> likes</div>
            </article>
          </section>
        </header>
        <section class="bio-follow-container">
          <article class="bio" id="bio">
            <p>Hello I'm Jennie Kim Contact me</p>
          </article>
          <article class="follow-container">
            <button class="btn">Followers</button>
            <button class="btn">Following</button>
            <button class="btn">Share profile</button>
          </article>
        </section>
      </section>
      <section class="post">
        <ul class="tab-titles">
          <li class="tab-title active">Shops</li>
          <li class="tab-title">Sold</li>
        </ul>
        <ul class="post-content">
          <li>
            <article href="./product.html" class="post-card">
              <img src="./assets/others/dress.png" alt="dress">
              <h3>white dress</h3>
              <h4>1000,000₮</h4>
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </article>
          </li>
          <li>
            <article href="./product.html" class="post-card">
              <img src="./assets/others/dress.png" alt="dress">
              <h3>white dress</h3>
              <h4>1000,000₮</h4>
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </article>
          </li>
          <li>
            <article href="./product.html" class="post-card">
              <img src="./assets/others/dress.png" alt="dress">
              <h3>white dress</h3>
              <h4>1000,000₮</h4>
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </article>
          </li>
        </ul>
      </section>
    </main>
`;
const menuToggle = document.getElementById('menuToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  menuToggle.addEventListener('click', function () {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close menu if clicked outside
  window.addEventListener('click', function (e) {
    if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });

const profilePic = localStorage.getItem("profilePic");
const fullName = localStorage.getItem("fullName");
const username = localStorage.getItem("username");
const bio = localStorage.getItem("bio");

if (profilePic) {
  const imgElem = document.getElementById("profilePic");
  if (imgElem) {
    imgElem.src = profilePic;
  }
}

if (fullName) {
  const fullNameElem = document.getElementById("fullName");
  if (fullNameElem) {
    fullNameElem.textContent = fullName;
  }
}

if (username) {
  const usernameElem = document.getElementById("username");
  if (usernameElem) {
    usernameElem.textContent = username;
  }
}

if (bio) {
  const bioElem = document.getElementById("bio");
  if (bioElem) {
    bioElem.textContent = bio; 
  }
}

    return main;
}