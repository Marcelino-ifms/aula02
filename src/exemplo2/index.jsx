import { useEffect, useState } from "react";

export default function App() {
  
  const [user,setUser] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
        const svAnswer = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await svAnswer.json();
        setUser(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {user.map(userI => (
          <li key={userI.id}>
            <img src={userI.thumbnailUrl} alt="imagem xdxdxd" />
            <p>{userI.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
