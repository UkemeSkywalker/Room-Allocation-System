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
  const gender = document.querySelector('input[name="gender"]:checked').value

  //     let gender;

  //   for(i = 0 ; i < genders.length ; i++){
  //     if(genders[i].checked){
  //         gender = genders[i].value;
  //     }
  //   }

  const user = { fname, role, room, gender }

  const error = document.getElementById('errors')
  const success = document.getElementById('success')

  if (user.fname == '') {
    window.alert(`Enter Your Firstname`)
    return
  }

  if (rooms[room].length >= 4) {
    window.alert(`Room ${room} is full`)
    return
  }

  // Check Role Allocation

  const findUser = rooms[room].find((u) => u.role == role)

  if (findUser) {
    window.alert(`Theres already a ${role} developer in the room`)
    return
  }

  // Check user Gender

  if (!user.gender) {
    window.alert(`select gender`)
    return
  }

  const checkGenderRoom = rooms[room].find((u) => u.gender == gender)

  if (rooms[room].length && !checkGenderRoom) {
    window.alert(
      `This is a ${
        gender == 'male' ? 'female' : 'male'
      } room, pick another room`,
    )
    return
  }

  //Assign user to Room

  const allocateRoom = rooms[room].push(user)
  success.innerHTML = `Success! ${user.fname} you have been assigened ${user.gender}, room ${user.room}`

  // Check if user has a room already

  console.log(user)
}
