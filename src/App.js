import React, { useState, useEffect } from 'react';

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

  return (
    <>
      <ul>
        { tech.map(t => <li key={t}>{t}</li>)}
      </ul>
      <input value={newTech} onChange={e => setNewThec(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
