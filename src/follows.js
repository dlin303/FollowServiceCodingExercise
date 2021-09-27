let customersCache = [{
  id: 0,
  name: '',
  emailAdresss: '',
  artistFollowing: [1,45,21,23]
}, 
{
  id: 1,
  name: '',
  emailAdresss: '',
  artistFollowing: [3,4,7]
},
{
  id: 2,
  name: '',
  emailAdresss: '',
  artistFollowing: [9,2,3]
}];

function follow(customerId, artistId) {
  console.log('follow called');
  // dynamo some table
  try {
    for (let i = 0; i < customersCache.length; i++) {
      if (customersCache[i].id === customerId) {
        customersCache[i].artistFollowing.push(artistId);
      }
    }
    return {statusCode: 200, message: 'succesful'};

  } catch (err) {
    console.error(JSON.stringify({statusCode: 500, message: err}));
    return {statusCode: 500, message: err};
  }
}

function isFollowing(customerId, artistId) {
  console.log('isFollowing called');
  try {
    for (let i = 0; i < customersCache.length; i++) {
      console.log(customersCache[i].id === customerId);
      if (customersCache[i].id === customerId) {
        let isFollowing = customersCache[i].artistFollowing.includes(artistId);
        return {statusCode: 200, message: 'succesful', isFollowing: isFollowing};
      }
    }
    
    return {statusCode: 200, message: `Customers does not follow artist ${artistID}`, isFollowing: null};   
  } catch (err) {
    console.error(JSON.stringify({statusCode: 500, message: err}));
    return {statusCode: 500, message: err};
  }
}

function unfollow(customerId, artistId) {
  try {
    for (let i = 0; i < customersCache.length; i++) {
      if (customersCache[i].id === customerId) {
        let artistIndex = -1;
        let customerArtistLength = customersCache[i].artistFollowing.length;
        for (let j = 0; j < customerArtistLength; j++) {
          console.log(`customer following artist ${customersCache[i].artistFollowing[j]}`);
          if (customersCache[i].artistFollowing[j] == artistId) {
            artistIndex = j;
            console.log('inside if unfollow');
            customersCache[i].artistFollowing = customersCache[i].artistFollowing.splice(0, artistIndex) + customersCache[i].artistFollowing.splice(artistIndex+1, customerArtistLength);
            break;  
          } 
        }

        if (artistIndex == -1) return {statusCode: 404, message: 'no change was done', isFollowing: isFollowing};
        return {statusCode: 200, message: 'change was done'};
      }
    }
    
    return {statusCode: 404, message: `Customers does not follow artist ${artistID}`, isFollowing: null};   
  } catch (err) {
    console.error(JSON.stringify({statusCode: 500, message: err}));
    return {statusCode: 500, message: err};
  }
}

export {
  follow,
  isFollowing,
  unfollow,
}
