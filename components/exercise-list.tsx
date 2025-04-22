"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import type { Exercise } from "@/types/exercise"
import { useState, useMemo } from "react"

interface ExerciseListProps {
  muscle: string
  exercises: Exercise[]
}

export function ExerciseList({ muscle, exercises }: ExerciseListProps) {
  const [equipmentFilter, setEquipmentFilter] = useState<string>("all")

  const filteredExercises = useMemo(() => {
    if (equipmentFilter === "all") return exercises
    if (equipmentFilter === "with") return exercises.filter((ex) => ex.equipment !== "Bodyweight")
    if (equipmentFilter === "without") return exercises.filter((ex) => ex.equipment === "Bodyweight")
    return exercises
  }, [exercises, equipmentFilter])

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2 className="text-xl font-bold text-neon-yellow">{muscle} Exercises</h2>
        <div className="flex gap-2">
          <select
            className="px-3 py-1 text-sm border border-neon-green bg-dark text-neon-green rounded-md focus:outline-none focus:ring-2 focus:ring-neon-yellow"
            onChange={(e) => setEquipmentFilter(e.target.value)}
            defaultValue="all"
          >
            <option value="all">All Equipment</option>
            <option value="with">With Equipment</option>
            <option value="without">Bodyweight Only</option>
          </select>
        </div>
      </div>

      <ScrollArea className="h-[400px] rounded-md">
        <div className="space-y-4 pr-4">
          {filteredExercises.map((exercise, index) => (
            <Card key={index} className="overflow-hidden bg-dark-card border-neon-green/20">
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-neon-yellow">{exercise.name}</CardTitle>
                    <CardDescription className="text-sm text-neon-green">Target: {exercise.target}</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-neon-yellow text-neon-yellow">
                    {exercise.equipment}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neon-green mb-1">Recommended:</p>
                    <p className="text-sm text-gray-400">
                      {exercise.sets} sets × {exercise.reps} reps
                    </p>
                    <p className="text-sm text-gray-400 mt-2">{exercise.description}</p>
                  </div>
                  <div className="flex-shrink-0 bg-dark-lighter rounded-md overflow-hidden w-full md:w-24 h-24 flex items-center justify-center border border-neon-green/20">
                    <div className="text-center p-2">
                      <div className="text-xs text-neon-green">{exercise.name}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
