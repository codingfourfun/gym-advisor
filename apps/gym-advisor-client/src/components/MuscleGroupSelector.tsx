import React from 'react';
import type { MuscleGroup } from '../types';

// Props Interface
interface MuscleGroupSelectorProps {
    muscleGroups: MuscleGroup[];    // Array of muscle groups to display
    onSelect: (muscleGroup: MuscleGroup) => void;   // Function called when user selects one
}

// ========================
// 3. MAIN COMPONENT
// ========================

// React.FC means "Functional Component"
// We pass in the Props interface we created above
export const MuscleGroupSelector: React.FC<MuscleGroupSelectorProps> = ({
  // Destructuring the props - this pulls muscleGroups and onSelect out of the props object
  muscleGroups,
  onSelect,
}) => {
  return (
    // Main container for the entire muscle selector section
    <div className="py-8">   {/* py-8 = padding top and bottom of 32px for breathing room */}

      {/* ======================== */}
      {/* HEADER SECTION */}
      {/* ======================== */}

      <h1 className="text-4xl font-bold text-center mb-2">
        Gym Advisor
      </h1>

      <p className="text-center text-gray-400 mb-10">
        Choose a muscle group to start building your workout
      </p>

      {/* ======================== */}
      {/* MUSCLE GROUPS GRID */}
      {/* ======================== */}

      {/* This grid is responsive using mobile-first approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* 
          We loop through every muscle group using .map()
          This creates one card for each muscle group (Chest, Back, etc.)
        */}
        {muscleGroups.map((group) => (
          <div
            key={group.id}                    // React needs unique key for lists
            onClick={() => onSelect(group)}   // When clicked, call the onSelect function passed from parent
            className="muscle-card group relative overflow-hidden rounded-2xl cursor-pointer border border-gray-800 hover:border-gray-600"
            style={{ borderColor: group.color + '40' }}   // Adds faint colored border using each group's color
          >
            {/* Image of the muscle group */}
            <img 
              src={group.imageUrl} 
              alt={group.displayName}
              className="w-full h-64 object-cover" 
            />

            {/* Dark gradient overlay so text is readable over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text content positioned at the bottom of the card */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 
                className="text-3xl font-semibold text-white"
                style={{ color: group.color }}     // Use the muscle group's accent color
              >
                {group.displayName}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Click to see exercises
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};