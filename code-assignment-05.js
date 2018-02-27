let project1 = {
  id: 1,
  title: 'Night out yo' ,
  hasThumbnail: true
}

let project2 = {
  id: 2,
  title: 'USGS Earthquake Data' ,
  hasThumbnail: true
}

let projects = [
  project1,
  project2
]

for (let i = 0; i < projects.length; i++) {
  console.log('project' + i + 'Night out yo' + projects[i].title)
  if (project[i].hasThumbnail === true) {
    console.log('images/screenshot' + projects[i].id + 'jpg')
  }
}
