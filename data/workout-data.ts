interface WorkoutDay {
  title: string
  exercises: string[]
}

interface WorkoutPlan {
  description: string
  days: {
    [key: string]: WorkoutDay
  }
}

interface WorkoutPlans {
  [key: string]: WorkoutPlan
}

export const workoutPlans: WorkoutPlans = {
  "fat-loss": {
    description:
      "High intensity, calorie-burning workouts with a mix of cardio and resistance training to maximize fat loss while preserving muscle.",
    days: {
      mon: {
        title: "Full Body HIIT",
        exercises: [
          "Burpees: 45 sec work, 15 sec rest",
          "Mountain Climbers: 45 sec work, 15 sec rest",
          "Jumping Jacks: 45 sec work, 15 sec rest",
          "Bodyweight Squats: 45 sec work, 15 sec rest",
          "Push-ups: 45 sec work, 15 sec rest",
          "Repeat circuit 3-4 times",
        ],
      },
      tue: {
        title: "Cardio + Core",
        exercises: [
          "30 min moderate intensity cardio (jogging, cycling, etc.)",
          "Plank: 3 sets of 30-60 sec",
          "Russian Twists: 3 sets of 20 reps",
          "Bicycle Crunches: 3 sets of 20 reps",
          "Leg Raises: 3 sets of 15 reps",
        ],
      },
      wed: {
        title: "Upper Body + HIIT",
        exercises: [
          "Push-ups: 3 sets of 10-15 reps",
          "Dumbbell Rows: 3 sets of 12 reps",
          "Shoulder Press: 3 sets of 12 reps",
          "Tricep Dips: 3 sets of 12 reps",
          "HIIT Finisher: 10 min of 30 sec work, 30 sec rest intervals",
        ],
      },
      thu: {
        title: "Active Recovery",
        exercises: ["Light walking or swimming: 30-45 min", "Full body stretching routine", "Foam rolling"],
      },
      fri: {
        title: "Lower Body + HIIT",
        exercises: [
          "Bodyweight Squats: 3 sets of 15-20 reps",
          "Walking Lunges: 3 sets of 12 reps per leg",
          "Glute Bridges: 3 sets of 15 reps",
          "Calf Raises: 3 sets of 20 reps",
          "HIIT Finisher: 10 min of 30 sec work, 30 sec rest intervals",
        ],
      },
      sat: {
        title: "Cardio",
        exercises: ["45-60 min moderate intensity cardio", "Options: jogging, cycling, swimming, elliptical"],
      },
      sun: {
        title: "Rest Day",
        exercises: [],
      },
    },
  },
  "muscle-gain": {
    description:
      "Progressive resistance training split to maximize muscle growth with adequate recovery periods and higher volume.",
    days: {
      mon: {
        title: "Chest & Triceps",
        exercises: [
          "Bench Press: 4 sets of 8-10 reps",
          "Incline Dumbbell Press: 3 sets of 10 reps",
          "Chest Flyes: 3 sets of 12 reps",
          "Tricep Pushdowns: 3 sets of 12 reps",
          "Overhead Tricep Extension: 3 sets of 12 reps",
        ],
      },
      tue: {
        title: "Back & Biceps",
        exercises: [
          "Pull-ups or Lat Pulldowns: 4 sets of 8-10 reps",
          "Bent Over Rows: 3 sets of 10 reps",
          "Seated Cable Rows: 3 sets of 10 reps",
          "Bicep Curls: 3 sets of 12 reps",
          "Hammer Curls: 3 sets of 12 reps",
        ],
      },
      wed: {
        title: "Rest or Light Cardio",
        exercises: ["Optional: 20-30 min light cardio", "Stretching and mobility work"],
      },
      thu: {
        title: "Legs",
        exercises: [
          "Squats: 4 sets of 8-10 reps",
          "Romanian Deadlifts: 3 sets of 10 reps",
          "Leg Press: 3 sets of 12 reps",
          "Leg Extensions: 3 sets of 15 reps",
          "Leg Curls: 3 sets of 15 reps",
          "Calf Raises: 4 sets of 15-20 reps",
        ],
      },
      fri: {
        title: "Shoulders & Abs",
        exercises: [
          "Overhead Press: 4 sets of 8-10 reps",
          "Lateral Raises: 3 sets of 12 reps",
          "Front Raises: 3 sets of 12 reps",
          "Face Pulls: 3 sets of 15 reps",
          "Plank: 3 sets of 30-60 seconds",
          "Russian Twists: 3 sets of 20 reps",
        ],
      },
      sat: {
        title: "Arms & Weakpoints",
        exercises: [
          "Close-Grip Bench Press: 3 sets of 10 reps",
          "Skull Crushers: 3 sets of 12 reps",
          "Barbell Curls: 3 sets of 10 reps",
          "Concentration Curls: 3 sets of 12 reps",
          "Additional exercises for lagging muscle groups",
        ],
      },
      sun: {
        title: "Rest Day",
        exercises: [],
      },
    },
  },
  strength: {
    description:
      "Focus on compound movements with progressive overload to build maximal strength with lower rep ranges and longer rest periods.",
    days: {
      mon: {
        title: "Squat Focus",
        exercises: [
          "Back Squat: 5 sets of 5 reps",
          "Front Squat: 3 sets of 5 reps",
          "Romanian Deadlift: 3 sets of 8 reps",
          "Leg Press: 3 sets of 8 reps",
          "Core work: Planks and Ab Wheel: 3 sets",
        ],
      },
      tue: {
        title: "Bench Focus",
        exercises: [
          "Bench Press: 5 sets of 5 reps",
          "Incline Bench Press: 3 sets of 6 reps",
          "Weighted Dips: 3 sets of 8 reps",
          "Overhead Tricep Extensions: 3 sets of 10 reps",
          "Face Pulls: 3 sets of 12 reps",
        ],
      },
      wed: {
        title: "Rest or Active Recovery",
        exercises: ["Light mobility work", "Stretching", "Optional: 20 min light cardio"],
      },
      thu: {
        title: "Deadlift Focus",
        exercises: [
          "Deadlift: 5 sets of 3 reps",
          "Barbell Rows: 3 sets of 6 reps",
          "Pull-ups or Lat Pulldowns: 3 sets of 8 reps",
          "Barbell Shrugs: 3 sets of 10 reps",
          "Farmer's Walks: 3 sets",
        ],
      },
      fri: {
        title: "Overhead Press Focus",
        exercises: [
          "Overhead Press: 5 sets of 5 reps",
          "Push Press: 3 sets of 6 reps",
          "Lateral Raises: 3 sets of 10 reps",
          "Barbell Curls: 3 sets of 8 reps",
          "Hammer Curls: 3 sets of 10 reps",
        ],
      },
      sat: {
        title: "Accessory Work",
        exercises: [
          "Front Squats: 3 sets of 8 reps",
          "Incline Bench Press: 3 sets of 8 reps",
          "Barbell Rows: 3 sets of 8 reps",
          "Dumbbell Shoulder Press: 3 sets of 10 reps",
          "Core work: 3-4 exercises, 3 sets each",
        ],
      },
      sun: {
        title: "Rest Day",
        exercises: [],
      },
    },
  },
}
