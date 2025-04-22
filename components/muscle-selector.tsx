"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { muscleData } from "@/data/muscle-data"

interface MuscleSelectorProps {
  gender: "male" | "female"
  selectedMuscle: string | null
  onSelectMuscle: (muscle: string | null) => void
}

export function MuscleSelector({ gender, selectedMuscle, onSelectMuscle }: MuscleSelectorProps) {
  const [hoveredMuscle, setHoveredMuscle] = useState<string | null>(null)

  const handleMuscleClick = (muscleName: string) => {
    if (selectedMuscle === muscleName) {
      onSelectMuscle(null)
    } else {
      onSelectMuscle(muscleName)
    }
  }

  return (
    <div className="relative w-full max-w-[300px]">
      <svg viewBox="0 0 200 400" className="w-full h-auto">
        {/* Base body outline */}
        <path
          d={
            gender === "male"
              ? "M100,30 C130,30 150,50 150,80 C150,100 140,120 130,130 C140,140 145,160 145,180 C145,210 130,240 120,260 C115,270 110,290 110,310 C110,330 115,350 120,370 C110,380 90,380 80,370 C85,350 90,330 90,310 C90,290 85,270 80,260 C70,240 55,210 55,180 C55,160 60,140 70,130 C60,120 50,100 50,80 C50,50 70,30 100,30 Z"
              : "M100,30 C130,30 145,50 145,80 C145,100 135,120 125,130 C135,140 140,160 140,180 C140,200 130,220 125,230 C135,240 140,250 140,260 C140,280 120,290 100,290 C80,290 60,280 60,260 C60,250 65,240 75,230 C70,220 60,200 60,180 C60,160 65,140 75,130 C65,120 55,100 55,80 C55,50 70,30 100,30 Z"
          }
          fill="#f3f4f6"
          stroke="#d1d5db"
          strokeWidth="1"
        />

        {/* Muscle groups */}
        {muscleData.map((muscle) => (
          <path
            key={muscle.name}
            d={muscle.paths[gender]}
            fill={selectedMuscle === muscle.name ? "#3b82f6" : hoveredMuscle === muscle.name ? "#93c5fd" : "#e5e7eb"}
            stroke="#d1d5db"
            strokeWidth="0.5"
            className="transition-colors cursor-pointer"
            onClick={() => handleMuscleClick(muscle.name)}
            onMouseEnter={() => setHoveredMuscle(muscle.name)}
            onMouseLeave={() => setHoveredMuscle(null)}
          />
        ))}

        {/* Muscle labels */}
        {muscleData.map((muscle) => (
          <text
            key={`label-${muscle.name}`}
            x={muscle.labelPosition[gender].x}
            y={muscle.labelPosition[gender].y}
            textAnchor="middle"
            fontSize="6"
            fill={selectedMuscle === muscle.name || hoveredMuscle === muscle.name ? "#1e40af" : "#6b7280"}
            className={cn(
              "pointer-events-none select-none",
              (selectedMuscle === muscle.name || hoveredMuscle === muscle.name) && "font-bold",
            )}
          >
            {muscle.name}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-4 text-xs text-center text-gray-500">Click on a muscle group to see exercises</div>
    </div>
  )
}
