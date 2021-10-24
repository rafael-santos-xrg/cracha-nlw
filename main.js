const userSocialMedia = {
  github: 'rafael-santos-xrg',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'ralpha_saint',
  twitter: 'rfael_sntos'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubInfos(){
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => { 
    title.textContent = data.name
    userBio.textContent = data.bio
    githubLink.href = data.html_url
    userName.textContent = data.login
    userImg.src = data.avatar_url
  })
}

getGitHubInfos()