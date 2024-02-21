const firebaseConfig = {
  apiKey: "AIzaSyDCU3gjSIENnLRHWV3zU-Bxy0Yxnc4LwMM",
  authDomain: "profile-app-1d655.firebaseapp.com",
  databaseURL: "https://profile-app-1d655-default-rtdb.firebaseio.com",
  projectId: "profile-app-1d655",
  storageBucket: "profile-app-1d655.appspot.com",
  messagingSenderId: "347510143723",
  appId: "1:347510143723:web:629ac115164112a8ae1cae",
  measurementId: "G-JB4Z0ZDJQ3"
};


fetch('https://us-central1-profile-app-1d655.cloudfunctions.net/UserInfo1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('animal1').textContent = data.animal;
        document.getElementById('height1').textContent = data.height;

        // Update the container div ID and set the image source
        document.getElementById('image1').src = data.image;

        document.getElementById('name1').textContent = data.name;
        document.getElementById('number1').textContent = data.number;
    })
    .catch(error => {
        console.error('Error:', error);
    });

fetch('https://us-central1-profile-app-1d655.cloudfunctions.net/UserInfo2')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('animal2').textContent = data.animal;
        document.getElementById('height2').textContent = data.height;
        document.getElementById('image2').src = data.image;
        document.getElementById('name2').textContent = data.name;
        document.getElementById('number2').textContent = data.number;
    })
    .catch(error => {
        console.error('Error:', error);
    });

