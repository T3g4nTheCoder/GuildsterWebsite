const inviteURL =
  "https://discord.com/oauth2/authorize?client_id=730440454835011674&permissions=2134207679&scope=bot";
const dashboardURL =
  "https://discord.com/api/oauth2/authorize?client_id=730440454835011674&redirect_uri=http%3A%2F%2Flocalhost%3A5000&response_type=code&scope=identify%20guilds.join";

const button = document.getElementById("1");
const label = document.getElementById("2");
const dashboard = document.getElementById("3");

label.onclick = () => labelClick();
button.onclick = () => buttonclick();
dashboard.onclick = () => dashboardClick();

function buttonclick() {
  button.innerHTML = "Loading...";
  document.location.href = "/invite";
}

function labelClick() {
  const oldHTML = label.innerHTML;
  label.innerHTML = "You are already on this page!";
  setTimeout(() => {
    label.innerHTML = oldHTML;
  }, 1000);
}

function dashboardClick() {
  dashboard.innerHTML = "Loading...";
  document.location.href = dashboardURL;
}

function burgerClick() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// const fragment = new URLSearchParams(window.location.search);

// if (fragment.has("code")) {
//   const accessToken = fragment.get("code");
//   const tokenType = fragment.get("code");

//   fetch("https://discord.com/api/users/@me", {
//     headers: {
//       authorization: `${tokenType} ${accessToken}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       console.log(response)
//     })
//     .catch(console.error);
// }