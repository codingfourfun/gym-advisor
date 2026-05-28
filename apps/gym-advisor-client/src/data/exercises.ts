// Sample data to build the UI immediately

import { MuscleGroup, Exercise } from '../types';

export const muscleGroups: MuscleGroup[] = [
    {
        id: 'chest',
        displayName: 'Chest',
        imageUrl: 'https://picsum.photos/id/1015/400/300',
        color: '#ef4444'
    },
    {
        id: 'back',
        displayName: 'Back',
        imageUrl: 'https://picsum.photos/id/201/400/300',
        color: '#8b5cf6'
    },
    {
        id: 'shoulders',
        displayName: 'Shoulders',
        imageUrl: 'https://picsum.photos/id/106/400/300',
        color: '#3b82f6'
    },
    {
        id: 'arms',
        displayName: 'Arms',
        imageUrl: 'https://picsum.photos/id/1074/400/300',
        color: '#eab308'
    },
    {
        id: 'legs',
        displayName: 'Legs',
        imageUrl: 'https://picsum.photos/id/1016/400/300',
        color: '#10b981'
    },
    {
        id: 'core',
        displayName: 'Core',
        imageUrl: 'https://picsum.photos/id/133/400/300',
        color: '#ec4899'
    }
];

export const exercises: Exercise[] =[
    {
        id: 'bicep-curl',
        name: 'Dumbell Bicep Curl',
        muscleGroup: 'arms',
        subMuscle: 'biceps',
        imageUrl: 'https://picsum.photos/id/1074/400/300',
        formTips: [
            "Keep elbows tucked close to your sides",
            "Control the weight slowly on the way down",
            "Avoid using momentum or swinging your body"
        ],
        recommendedReps: "8-12",
        difficulty: 'beginner',
        lastLogged: {
            date: "2026-05-27",
            weight: 30,
            reps: 10,
            sets: 3
        }
    }
];