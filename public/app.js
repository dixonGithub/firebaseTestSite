 document.addEventListener("DOMContentLoaded", event => {
     const app = firebase.app();

     const db = firebase.firestore();
     const person = db.collection('People').doc('Dave Chappelle');

     person.get()
            .then(doc => {
                const data = doc.data();
                document.write( data.Name + '<br>')
                document.write( data.Links + '<br>')
                document.write( data.Profession + '<br>')
                document.write( data.Biography + '<br>')
            })
 });

 function googleLogin() {
     const provider = new firebase.auth.GoogleAuthProvider();

     firebase.auth().signInWithPopup(provider).then(result => {
                    const user = result.user;
                    document.write(user.displayName)
                    console.log(user)

                })
                .catch(console.log)
 }