import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinit from "../Firebase/firebase.init";
firebaseinit()


const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [nameUser, setNameUser] = useState([])
  const [error, setError] = useState([]);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

      
    useEffect(()=>{
        const unsibscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsibscribed;
    },[])

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const handleEmailSignIn = () =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleEmailReg = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const addUsertODB = () => {
        const user = {email:email}
        const url ='http://localhost:5000/users';
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const upsertGoogleLog = email => {
        const newUsers = {email:email}
        const url ='http://localhost:5000/users';
        fetch(url, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUsers)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const logout = () =>{
          signOut(auth).then(() => {
              setUser({});
              setEmail({})
              setError([]);
              setPassword([])
              setNameUser([])
          }).catch((error) => {
              setError(error.message);
          })
          .finally(()=> setIsLoading(false));
      }

      console.log(user)

      return {
        user,
        nameUser,
        setNameUser,
        googleSignIn,
        handleEmailSignIn,
        handleEmailReg,
        addUsertODB,
        upsertGoogleLog,
        setUser,
        setEmail,
        setPassword,
        setError,
        setIsLoading,
        signOut,
        logout,
        isLoading,
        error
      }
}

export default useFirebase;