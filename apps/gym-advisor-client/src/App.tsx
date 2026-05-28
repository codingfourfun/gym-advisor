// src/App.tsx

import React from 'react';
import { muscleGroups } from './data/exercises';
import { MuscleGroupSelector } from './components/MuscleGroupSelector';

function App() {
  const handleMuscleSelect = (group: any) => {
    console.log("Selected:", group.displayName);
    alert(`You clicked ${group.displayName} - Good job!`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <MuscleGroupSelector 
        muscleGroups={muscleGroups}
        onSelect={handleMuscleSelect}
      />
    </div>
  );
}

export default App;