import type { Exercise } from "@/types/exercise"

interface MuscleData {
  name: string
  paths: {
    male: string
    female: string
  }
  labelPosition: {
    male: { x: number; y: number }
    female: { x: number; y: number }
  }
  exercises: Exercise[]
}

export const muscleData: MuscleData[] = [
  {
    name: "Chest",
    paths: {
      male: "M80,100 C90,95 110,95 120,100 C120,110 120,120 120,130 C110,135 90,135 80,130 C80,120 80,110 80,100 Z",
      female: "M80,100 C90,95 110,95 120,100 C120,110 120,120 120,130 C110,135 90,135 80,130 C80,120 80,110 80,100 Z",
    },
    labelPosition: {
      male: { x: 100, y: 115 },
      female: { x: 100, y: 115 },
    },
    exercises: [
      // Bodyweight exercises
      {
        name: "Standard Push-up",
        target: "Chest",
        equipment: "Bodyweight",
        sets: "3-4",
        reps: "10-15",
        description:
          "Start in a plank position with hands shoulder-width apart, lower your body until your chest nearly touches the floor, then push back up.",
        gender: "Male",
      },
      {
        name: "Wide Push-up",
        target: "Outer Chest",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-12",
        description: "Perform a push-up with hands placed wider than shoulder-width to target the outer chest muscles.",
        gender: "Male",
      },
      {
        name: "Diamond Push-up",
        target: "Inner Chest",
        equipment: "Bodyweight",
        sets: "3",
        reps: "8-12",
        description:
          "Place hands close together forming a diamond shape with thumbs and index fingers, then perform a push-up to target inner chest.",
        gender: "Male",
      },
      {
        name: "Decline Push-up",
        target: "Upper Chest",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-15",
        description:
          "Place feet on an elevated surface and hands on the ground, then perform a push-up to target the upper chest.",
        gender: "Male",
      },
      {
        name: "Plyometric Push-up",
        target: "Chest & Explosiveness",
        equipment: "Bodyweight",
        sets: "3",
        reps: "6-10",
        description: "Perform a push-up with enough force that your hands leave the ground at the top of the movement.",
        gender: "Male",
      },

      // Equipment-based exercises
      {
        name: "Barbell Bench Press",
        target: "Chest",
        equipment: "Barbell",
        sets: "4",
        reps: "8-12",
        description:
          "Lie on a bench with feet on the ground, grip the barbell with hands slightly wider than shoulder-width, lower to chest and press back up.",
        gender: "Male",
      },
      {
        name: "Dumbbell Bench Press",
        target: "Chest",
        equipment: "Dumbbells",
        sets: "3-4",
        reps: "8-12",
        description:
          "Lie on a bench with a dumbbell in each hand at chest level, press the weights up until your arms are extended, then lower back down.",
        gender: "Male",
      },
      {
        name: "Incline Dumbbell Press",
        target: "Upper Chest",
        equipment: "Dumbbells",
        sets: "3",
        reps: "8-12",
        description: "Perform a dumbbell press on a bench set to a 30-45 degree incline to target the upper chest.",
        gender: "Male",
      },
      {
        name: "Chest Fly",
        target: "Chest",
        equipment: "Dumbbells",
        sets: "3",
        reps: "10-12",
        description:
          "Lie on a bench with arms extended above chest holding dumbbells, lower weights out to sides in an arc motion, then bring back together.",
        gender: "Male",
      },
      {
        name: "Cable Crossover",
        target: "Inner Chest",
        equipment: "Cable Machine",
        sets: "3",
        reps: "12-15",
        description:
          "Stand between cable stations with arms extended out to sides, pull cables forward and down in an arc until hands meet in front of you.",
        gender: "Male",
      },
      {
        name: "Pec Deck Machine",
        target: "Chest",
        equipment: "Machine",
        sets: "3",
        reps: "12-15",
        description:
          "Sit on the machine with arms on the pads, press arms together in front of you, squeezing your chest muscles at the point of contraction.",
        gender: "Male",
      },
    ],
  },
  {
    name: "Biceps",
    paths: {
      male: "M75,140 C70,150 70,160 70,170 C75,175 80,175 85,170 C85,160 85,150 80,140 C78,138 77,138 75,140 Z",
      female: "M75,140 C70,150 70,160 70,170 C75,175 80,175 85,170 C85,160 85,150 80,140 C78,138 77,138 75,140 Z",
    },
    labelPosition: {
      male: { x: 77, y: 155 },
      female: { x: 77, y: 155 },
    },
    exercises: [
      // Bodyweight exercises
      {
        name: "Chin-up",
        target: "Biceps",
        equipment: "Bodyweight",
        sets: "3-4",
        reps: "6-10",
        description:
          "Hang from a bar with palms facing you, pull your body up until your chin is above the bar, then lower back down with control.",
        gender: "Male",
      },
      {
        name: "Inverted Row (Supinated)",
        target: "Biceps & Back",
        equipment: "Bodyweight",
        sets: "3",
        reps: "8-12",
        description:
          "Position yourself under a horizontal bar with palms facing you, pull your chest up to the bar while keeping your body straight.",
        gender: "Male",
      },
      {
        name: "Isometric Chin-up Hold",
        target: "Biceps",
        equipment: "Bodyweight",
        sets: "3",
        reps: "20-30 sec",
        description: "Pull yourself up to the top position of a chin-up and hold the position for time.",
        gender: "Male",
      },
      {
        name: "Body Curl",
        target: "Biceps",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-15",
        description:
          "Sit on the edge of a bench, place hands beside hips, slide hips forward off bench and bend arms to curl body up.",
        gender: "Male",
      },
      {
        name: "Towel Curl",
        target: "Biceps & Grip",
        equipment: "Bodyweight",
        sets: "3",
        reps: "8-12 each arm",
        description:
          "Hang a towel over a pull-up bar, grip it with one hand and perform curling motions to pull yourself up.",
        gender: "Male",
      },

      // Equipment-based exercises
      {
        name: "Barbell Curl",
        target: "Biceps",
        equipment: "Barbell",
        sets: "3-4",
        reps: "8-12",
        description:
          "Stand with barbell in hands, palms facing forward, curl the weight toward your shoulders while keeping elbows fixed at sides.",
        gender: "Male",
      },
      {
        name: "Dumbbell Curl",
        target: "Biceps",
        equipment: "Dumbbells",
        sets: "3-4",
        reps: "10-12",
        description:
          "Stand with dumbbells at your sides, palms facing forward. Curl the weights toward your shoulders while keeping elbows fixed.",
        gender: "Male",
      },
      {
        name: "Hammer Curl",
        target: "Biceps & Brachialis",
        equipment: "Dumbbells",
        sets: "3",
        reps: "10-12",
        description:
          "Stand with dumbbells at your sides, palms facing your body. Curl the weights toward your shoulders while maintaining the neutral grip.",
        gender: "Male",
      },
      {
        name: "Preacher Curl",
        target: "Biceps (Lower)",
        equipment: "Barbell/Dumbbells",
        sets: "3",
        reps: "10-12",
        description:
          "Sit at a preacher bench, rest arms on the pad with elbows extended, curl the weight up and then lower with control.",
        gender: "Male",
      },
      {
        name: "Concentration Curl",
        target: "Biceps (Peak)",
        equipment: "Dumbbell",
        sets: "3",
        reps: "10-12 each arm",
        description:
          "Sit on a bench, lean forward with elbow against inner thigh, curl dumbbell up toward shoulder with palm facing up.",
        gender: "Male",
      },
      {
        name: "Cable Curl",
        target: "Biceps",
        equipment: "Cable Machine",
        sets: "3",
        reps: "12-15",
        description:
          "Stand facing a cable machine with low pulley attachment, curl the handle up toward your shoulders.",
        gender: "Male",
      },
    ],
  },
  {
    name: "Abs",
    paths: {
      male: "M90,140 C95,140 105,140 110,140 C110,160 110,180 110,200 C105,200 95,200 90,200 C90,180 90,160 90,140 Z",
      female: "M90,140 C95,140 105,140 110,140 C110,160 110,180 110,200 C105,200 95,200 90,200 C90,180 90,160 90,140 Z",
    },
    labelPosition: {
      male: { x: 100, y: 170 },
      female: { x: 100, y: 170 },
    },
    exercises: [
      // Bodyweight exercises
      {
        name: "Crunch",
        target: "Upper Abs",
        equipment: "Bodyweight",
        sets: "3",
        reps: "15-20",
        description:
          "Lie on your back with knees bent, hands behind your head. Lift your shoulders off the ground by contracting your abs, then lower back down.",
        gender: "Male",
      },
      {
        name: "Plank",
        target: "Core Stability",
        equipment: "Bodyweight",
        sets: "3",
        reps: "30-60 sec",
        description:
          "Hold a push-up position with your weight on your forearms, keeping your body in a straight line from head to heels.",
        gender: "Male",
      },
      {
        name: "Russian Twist",
        target: "Obliques",
        equipment: "Bodyweight",
        sets: "3",
        reps: "12-15 each side",
        description:
          "Sit with knees bent and feet off the ground, twist your torso from side to side, touching the ground beside you with your hands.",
        gender: "Male",
      },
      {
        name: "Leg Raise",
        target: "Lower Abs",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-15",
        description:
          "Lie on your back with legs extended, raise your legs to a 90-degree angle while keeping them straight, then lower back down.",
        gender: "Male",
      },
      {
        name: "Mountain Climber",
        target: "Full Abs & Cardio",
        equipment: "Bodyweight",
        sets: "3",
        reps: "20-30 each leg",
        description: "Start in a plank position, rapidly alternate bringing knees toward chest in a running motion.",
        gender: "Male",
      },
      {
        name: "Bicycle Crunch",
        target: "Abs & Obliques",
        equipment: "Bodyweight",
        sets: "3",
        reps: "15-20 each side",
        description:
          "Lie on your back, bring opposite elbow to opposite knee while extending the other leg, then alternate sides in a pedaling motion.",
        gender: "Male",
      },

      // Equipment-based exercises
      {
        name: "Weighted Crunch",
        target: "Upper Abs",
        equipment: "Weight Plate",
        sets: "3",
        reps: "12-15",
        description: "Perform a standard crunch while holding a weight plate against your chest.",
        gender: "Male",
      },
      {
        name: "Cable Crunch",
        target: "Upper Abs",
        equipment: "Cable Machine",
        sets: "3",
        reps: "12-15",
        description:
          "Kneel facing a cable machine with rope attachment, hold rope behind head and crunch down toward floor.",
        gender: "Male",
      },
      {
        name: "Decline Sit-up",
        target: "Upper Abs",
        equipment: "Decline Bench",
        sets: "3",
        reps: "12-15",
        description: "Secure feet at the end of a decline bench, cross arms over chest and perform a sit-up.",
        gender: "Male",
      },
      {
        name: "Weighted Russian Twist",
        target: "Obliques",
        equipment: "Dumbbell/Medicine Ball",
        sets: "3",
        reps: "12-15 each side",
        description: "Perform a Russian twist while holding a weight, rotating from side to side.",
        gender: "Male",
      },
      {
        name: "Ab Rollout",
        target: "Full Abs",
        equipment: "Ab Wheel",
        sets: "3",
        reps: "8-12",
        description:
          "Kneel on the floor holding an ab wheel, roll forward extending your body, then use abs to pull back to starting position.",
        gender: "Male",
      },
      {
        name: "Hanging Leg Raise",
        target: "Lower Abs",
        equipment: "Pull-up Bar",
        sets: "3",
        reps: "10-15",
        description:
          "Hang from a pull-up bar, raise legs until they're parallel to the ground or higher, then lower with control.",
        gender: "Male",
      },
    ],
  },
  {
    name: "Quads",
    paths: {
      male: "M85,220 C90,220 95,220 100,220 C105,240 105,260 105,280 C100,280 95,280 90,280 C85,260 85,240 85,220 Z",
      female: "M85,220 C90,220 95,220 100,220 C105,240 105,260 105,280 C100,280 95,280 90,280 C85,260 85,240 85,220 Z",
    },
    labelPosition: {
      male: { x: 95, y: 250 },
      female: { x: 95, y: 250 },
    },
    exercises: [
      // Bodyweight exercises
      {
        name: "Bodyweight Squat",
        target: "Quads",
        equipment: "Bodyweight",
        sets: "3-4",
        reps: "15-20",
        description:
          "Stand with feet shoulder-width apart, lower your body by bending your knees and pushing your hips back, then return to standing.",
        gender: "Male",
      },
      {
        name: "Walking Lunge",
        target: "Quads & Glutes",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-12 each leg",
        description:
          "Step forward with one leg, lowering your body until both knees are bent at 90 degrees, then push off to bring the other leg forward.",
        gender: "Male",
      },
      {
        name: "Bulgarian Split Squat",
        target: "Quads & Balance",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-12 each leg",
        description:
          "Place one foot on a bench behind you, lower your body until your front thigh is parallel to the ground, then push back up.",
        gender: "Male",
      },
      {
        name: "Pistol Squat",
        target: "Quads & Balance",
        equipment: "Bodyweight",
        sets: "3",
        reps: "5-8 each leg",
        description:
          "Stand on one leg, extend the other leg forward, squat down on the supporting leg, then return to standing.",
        gender: "Male",
      },
      {
        name: "Jump Squat",
        target: "Quads & Power",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-15",
        description:
          "Perform a squat, then explosively jump upward at the top of the movement, land softly and immediately lower into the next rep.",
        gender: "Male",
      },
      {
        name: "Wall Sit",
        target: "Quads (Isometric)",
        equipment: "Bodyweight",
        sets: "3",
        reps: "30-60 sec",
        description:
          "Lean against a wall with thighs parallel to the ground as if sitting in an invisible chair, hold the position.",
        gender: "Male",
      },

      // Equipment-based exercises
      {
        name: "Barbell Back Squat",
        target: "Quads & Glutes",
        equipment: "Barbell",
        sets: "4",
        reps: "8-12",
        description:
          "Place a barbell across your upper back, squat down until thighs are parallel to floor or lower, then stand back up.",
        gender: "Male",
      },
      {
        name: "Front Squat",
        target: "Quads",
        equipment: "Barbell",
        sets: "3",
        reps: "8-10",
        description:
          "Hold a barbell across your front shoulders, squat down until thighs are parallel to floor, then stand back up.",
        gender: "Male",
      },
      {
        name: "Leg Press",
        target: "Quads",
        equipment: "Machine",
        sets: "3-4",
        reps: "10-12",
        description:
          "Sit in the leg press machine with feet on the platform, push the weight away by extending your legs, then return to starting position.",
        gender: "Male",
      },
      {
        name: "Hack Squat",
        target: "Quads",
        equipment: "Machine",
        sets: "3",
        reps: "10-12",
        description:
          "Position yourself in a hack squat machine, lower your body by bending your knees, then push back up to starting position.",
        gender: "Male",
      },
      {
        name: "Leg Extension",
        target: "Quads (Isolation)",
        equipment: "Machine",
        sets: "3",
        reps: "12-15",
        description:
          "Sit in a leg extension machine, extend your legs until they're straight, then lower with control.",
        gender: "Male",
      },
      {
        name: "Dumbbell Lunge",
        target: "Quads & Glutes",
        equipment: "Dumbbells",
        sets: "3",
        reps: "10-12 each leg",
        description:
          "Hold dumbbells at your sides, step forward with one leg into a lunge, then push back to starting position.",
        gender: "Male",
      },
    ],
  },
  {
    name: "Shoulders",
    paths: {
      male: "M70,90 C75,85 80,80 85,80 C85,85 85,90 85,95 C80,95 75,95 70,95 C70,93 70,92 70,90 Z M115,90 C120,85 125,80 130,80 C130,85 130,90 130,95 C125,95 120,95 115,95 C115,93 115,92 115,90 Z",
      female:
        "M70,90 C75,85 80,80 85,80 C85,85 85,90 85,95 C80,95 75,95 70,95 C70,93 70,92 70,90 Z M115,90 C120,85 125,80 130,80 C130,85 130,90 130,95 C125,95 120,95 115,95 C115,93 115,92 115,90 Z",
    },
    labelPosition: {
      male: { x: 100, y: 85 },
      female: { x: 100, y: 85 },
    },
    exercises: [
      // Bodyweight exercises
      {
        name: "Pike Push-up",
        target: "Shoulders",
        equipment: "Bodyweight",
        sets: "3",
        reps: "8-12",
        description:
          "Form an inverted V shape with your body, hands and feet on the floor, then bend your elbows to lower your head toward the ground.",
        gender: "Male",
      },
      {
        name: "Handstand Push-up",
        target: "Shoulders",
        equipment: "Bodyweight",
        sets: "3",
        reps: "5-8",
        description:
          "Get into a handstand position against a wall, lower your body by bending your arms, then push back up.",
        gender: "Male",
      },
      {
        name: "Wall Walk",
        target: "Shoulders & Core",
        equipment: "Bodyweight",
        sets: "3",
        reps: "5-8",
        description:
          "Start in a plank position with feet against a wall, walk feet up the wall while walking hands closer to the wall.",
        gender: "Male",
      },
      {
        name: "Decline Push-up",
        target: "Front Shoulders",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-15",
        description:
          "Place feet on an elevated surface and hands on the ground, then perform a push-up with shoulders as the primary focus.",
        gender: "Male",
      },
      {
        name: "Arm Circles",
        target: "Shoulder Endurance",
        equipment: "Bodyweight",
        sets: "3",
        reps: "20-30 each direction",
        description:
          "Extend arms out to sides and make small circular motions, gradually increasing the size of the circles.",
        gender: "Male",
      },
      {
        name: "Plank Shoulder Taps",
        target: "Shoulders & Core",
        equipment: "Bodyweight",
        sets: "3",
        reps: "10-15 each arm",
        description:
          "Start in a plank position, tap one hand to the opposite shoulder while maintaining a stable core, then alternate.",
        gender: "Male",
      },

      // Equipment-based exercises
      {
        name: "Overhead Press",
        target: "Shoulders",
        equipment: "Barbell",
        sets: "4",
        reps: "8-10",
        description:
          "Stand with a barbell at shoulder height, press the weight overhead until arms are fully extended, then lower back down.",
        gender: "Male",
      },
      {
        name: "Dumbbell Shoulder Press",
        target: "Shoulders",
        equipment: "Dumbbells",
        sets: "3-4",
        reps: "8-12",
        description:
          "Sit or stand with dumbbells at shoulder height, press the weights overhead until arms are extended, then lower back down.",
        gender: "Male",
      },
      {
        name: "Lateral Raise",
        target: "Side Deltoids",
        equipment: "Dumbbells",
        sets: "3",
        reps: "10-15",
        description:
          "Stand with dumbbells at your sides, raise the weights out to the sides until arms are parallel to the floor, then lower back down.",
        gender: "Male",
      },
      {
        name: "Front Raise",
        target: "Front Deltoids",
        equipment: "Dumbbells",
        sets: "3",
        reps: "10-12",
        description:
          "Stand with dumbbells in front of thighs, raise the weights in front of you until arms are parallel to the floor, then lower back down.",
        gender: "Male",
      },
      {
        name: "Reverse Fly",
        target: "Rear Deltoids",
        equipment: "Dumbbells",
        sets: "3",
        reps: "12-15",
        description:
          "Bend at the waist with dumbbells hanging down, raise weights out to sides while squeezing shoulder blades together.",
        gender: "Male",
      },
      {
        name: "Face Pull",
        target: "Rear Deltoids",
        equipment: "Cable Machine",
        sets: "3",
        reps: "12-15",
        description:
          "Pull a rope attachment toward your face with elbows high, focusing on squeezing your shoulder blades together.",
        gender: "Male",
      },
      {
        name: "Upright Row",
        target: "Shoulders & Traps",
        equipment: "Barbell/Dumbbells",
        sets: "3",
        reps: "10-12",
        description:
          "Hold weight in front of thighs, pull it up along your body until elbows are at shoulder height, then lower back down.",
        gender: "Male",
      },
    ],
  },
]
