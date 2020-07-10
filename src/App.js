import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  const [newTech, setNewThec] = useState('');

  function handleAdd() {
    setTech([...tech, newTech])
    setNewThec('');
  }

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
