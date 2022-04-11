export function fetchFavorite(cb, userName) {
    console.log("userName från funktion", userName);
    console.log("cb", cb);


    fetch("http://localhost:3001/favoriteexercises", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userName)
      })
      .then(res => res.json())
      .then(data => {
          //console.log("data", data);
        //   cb(data[0].favoriteExercises);
        //cb(data);
      });
}

