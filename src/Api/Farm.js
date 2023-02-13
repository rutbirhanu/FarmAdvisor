const farms = async () => {
  try {
      let response = await fetch('https://localhost:7086/farms',{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
      return await response.json()
  } catch(err) {
      console.log(err)
  }
}

const farmList = async () => {
  try {
      let response = await fetch('FAQ.json',{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
      return await response.json()
  } catch(err) {
      console.log(err)
  }
}


const create = async (farm) => {
  try {
      let response = await fetch('https://localhost:7086', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
      },
          body: JSON.stringify(book)
    })
      return await response.json()
    console.log("farm", farm)
    return  await farm

  } catch(err) {
      console.log(err)
  }
}  


export {farms, farmList, create}