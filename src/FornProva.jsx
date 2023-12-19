import { useState } from "react";

const FormProva = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Errore durante il login');
        }
  
        const data = await response.json();
  
        // Memorizza il token nel localStorage
        localStorage.setItem('token', data.token);
  
        // Gestisci la risposta del backend o reindirizza l'utente
        console.log(data);
      } catch (error) {
        console.log("sbagliate credenzialis");
      }
    };
  
    const handleSignup = async () => {
      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Errore durante il signup');
        }
  
        // Puoi gestire una risposta positiva dal backend, se necessario
        console.log('Registrazione avvenuta con successo!');
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin();
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">login</button>
        </form>
        <button onClick={handleSignup}>signup</button>
      </div>
    );
  };

export default FormProva