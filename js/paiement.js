
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqgM0hURUnfX3jg9xb89QZuCAVV_LCe2eZ6HbVJZ1wAc8iblDUMdTHZ52CruzhP4IN/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => document.getElementById('forma').style.display = "none")
  //.then(response => window.location = document.getElementById('docs'))
  .then(response => document.getElementById('phone').value = '')
  .then(response => document.getElementById("Opaie").style.display = 'block')
  //.catch(error => console.error('Error!', error.message))
});

function log() {
    auth.signOut();
    window.location = "users/login.html";
}

firebase.auth().onAuthStateChanged((user) => {
    var user = firebase.auth().currentUser;
    var log =document.getElementById('log');
    var lock =document.getElementById('lock');
    var unlock =document.getElementById('unlock');
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      //https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      fs.collection('users').doc(user.uid).get().then((snapshot) => {
        console.log(snapshot.data().Name);
        console.log(snapshot.data().Rcoins);
        document.getElementById('username').value = snapshot.data().Name;
        document.getElementById('rc').value = snapshot.data().Rcoins;
        log.style.display = 'block';
        log.innerHTML ='Deconnectez';
        unlock.style.display = 'block';


        var Rc = (snapshot.data().Rcoins);

document.getElementById("lvb").addEventListener("click", myFunction);
function myFunction() {
    var price = document.getElementById('prix').value;
    var lien = document.getElementById('docs');
    //var price = prix.innerHTML;
    var Rc = (snapshot.data().Rcoins);
    console.log(price);
    //document.location.reload(true);
    if(Rc >= price){
        fs.collection('users').doc(user.uid).update({
            Rcoins : Rc - price
            
}).then(() => {
    document.getElementById("Opaie").style.display = 'none';
     var progress = document.getElementById('myProgress');
     var i = 0;
     progress.style.display = 'block';
   if (i == 0) {
     i = 1;
     var elem = document.getElementById("myBar");
     var width = 0;
     var id = setInterval(frame, 0);
     function frame() {
       if (width >= 100) {
         clearInterval(id);
         
         i = 0;
         setTimeout(() => {
            window.location = lien;
            document.getElementById("Fpaiment").style.display = 'block';
            document.getElementById("Opaie").style.display = 'none';
            progress.style.display = 'none';
         }, 2000);
       }else {
         width++;
         elem.style.width = width + "%";
         elem.innerHTML = width + "%";
         
       }
     }
   }
         
  }).then(() => {
    document.getElementById("Fpaiment").style.display = 'block';
    document.getElementById("Opaie").style.display = 'none';
    window.location = lien;
    
  }
  );
}else{
document.getElementById('messages').textContent = "Vous n'avez pas assez de Rc";
document.getElementById('messages').textContent = "Vous n'avez pas assez de Rc";
}


}
        

    })
    } else {
      // User is signed out
      localStorage.setItem('username', user)
      console.log('user is not signed in to retrive username');
      log.style.display = 'block';
      lock.style.display = 'block';
      log.innerHTML ='Connectez-vous';
      window.location = 'users/login.html'
    }
  });
  
  document.getElementById("Fermer").addEventListener("click", f);
function f(){
    document.location.reload(true);
    document.getElementById("Fpaiment").style.display = 'none';
}