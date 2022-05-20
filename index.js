const rooms = {
  1: [],
  2: [],
  3: [],
}

document.getElementById('submit').onclick = (event) => {
  event.preventDefault()
  const fname = document.getElementById('fname').value
  const role = document.getElementById('role').value
  const room = document.getElementById('room').value
  const gender = document.querySelector('input[name="gender"]:checked')

  //     let gender;

  //   for(i = 0 ; i < genders.length ; i++){
  //     if(genders[i].checked){
  //         gender = genders[i].value;
  //     }
  //   }

  const user = { fname, role, room, gender }

  const error = document.getElementById('errors')
  if (rooms[room].length >= 4) {
    error.innerHTML = `Room ${room} is full`
    return
  }

  const foundUser = rooms[room].find((u) => u.role == role)

  if (foundUser) {
    error.innerHTML = `Theres already an ${role} developer in the room`
    return
  }

  const checkGenderRoom = rooms[room].find((u) => u.gender == gender)
  if (rooms[room].length && !checkGenderRoom) {
    error.innerHTML = `This is a ${
      gender == 'male' ? 'female' : 'male'
    } room, pick another room`
    return
  }

  rooms[room].push(user)

  error.innerHTML = ''

  console.log(user)
}
