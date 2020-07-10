import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState([

  ]);

  const [newTech, setNewThec] = useState('');

  function handleAdd() {
    setTech([...tech, newTech])
    setNewThec('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        { tech.map(t => <li key={t}>{t}</li>)}
      </ul>
  <strong>Você tem {techSize} tecnologias </strong>
      <input value={newTech} onChange={e => setNewThec(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
