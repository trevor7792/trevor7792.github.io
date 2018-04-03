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
  console.log('project' + i + 'title' + projects[i].title)
  if (projects[i].hasThumbnail === true) {
    console.log('images/screenshot' + projects[i].id + '.jpg')
  }
}

function describeCountry(country) {
  let description = 'The ' + country + ' was founded on freedom from tyranny.'
  return description
}

let mycountry = 'United States of America'
let description = describeCountry(mycountry)
console.log(description)
