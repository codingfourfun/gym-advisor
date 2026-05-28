// src/App.tsx

import React from 'react';

// Import the data
import { muscleGroups } from './data/exercises';

// Import the component you just created
import { MuscleGroupSelector } from './components/MuscleGroupSelector';

function App() {

  // Handler function - this will run when user clicks a muscle group
  const handleMuscleSelect = (group: any) => {
    console.log("User selected:", group.displayName);
    // Later we will show exercises for this group
    alert(`You selected ${group.displayName} - Next we will show exercises`);
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