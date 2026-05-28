// This is the blueprint for our specific exercises and muscle groups

export interface MuscleGroup {
  id: string;
  displayName: string;
  imageUrl: string;
  color: string;  
}

export interface Exercise {
    id: string;
    name: string;
    muscleGroup: string;
    subMuscle?: string;
    imageUrl: string;
    formTips: string[];
    recommendedReps: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    lastLogged?: {
        date: string;
        weight: number;
        reps: number;
        sets: number;
    };
}