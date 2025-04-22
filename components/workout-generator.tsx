"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { workoutPlans } from "@/data/workout-data"
import { CheckCircle2, RotateCcw } from "lucide-react"
import { saveWorkoutState, loadWorkoutState } from "@/lib/local-storage"

type WorkoutGoal = "fat-loss" | "muscle-gain" | "strength"
type CompletedExercises = Record<string, Record<number, boolean>>

export function WorkoutGenerator() {
  const [selectedGoal, setSelectedGoal] = useState<WorkoutGoal>("fat-loss")
  const [showResults, setShowResults] = useState(false)
  const [completedExercises, setCompletedExercises] = useState<CompletedExercises>({})
  const [activeDay, setActiveDay] = useState<string>("mon")
  const [progressPercentage, setProgressPercentage] = useState<Record<string, number>>({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  })
  const [overallProgress, setOverallProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true)

    // Load saved state from localStorage
    const savedState = loadWorkoutState()
    setSelectedGoal(savedState.selectedGoal)
    setShowResults(savedState.showResults)
    setCompletedExercises(savedState.completedExercises)
    setActiveDay(savedState.activeDay)
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      saveWorkoutState({
        selectedGoal,
        showResults,
        completedExercises,
        activeDay,
      })
    }
  }, [selectedGoal, showResults, completedExercises, activeDay, isClient])

  const handleGenerateWorkout = () => {
    setShowResults(true)
    // Reset completed exercises when generating a new workout
    setCompletedExercises({})
    updateAllProgress()
  }

  const handleReset = () => {
    setShowResults(false)
    setCompletedExercises({})
    updateAllProgress()
  }

  const toggleExerciseCompletion = (day: string, index: number) => {
    setCompletedExercises((prev) => {
      const dayExercises = prev[day] || {}
      const newDayExercises = {
        ...dayExercises,
        [index]: !dayExercises[index],
      }

      return {
        ...prev,
        [day]: newDayExercises,
      }
    })
  }

  const updateAllProgress = () => {
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
    const newProgressPercentage: Record<string, number> = {}
    let totalExercises = 0
    let totalCompleted = 0

    days.forEach((day) => {
      const exercisesForDay = workoutPlans[selectedGoal]?.days[day]?.exercises || []
      const completedForDay = completedExercises[day] || {}

      const totalForDay = exercisesForDay.length
      const completedCountForDay = Object.values(completedForDay).filter(Boolean).length

      const percentageForDay = totalForDay > 0 ? Math.round((completedCountForDay / totalForDay) * 100) : 0

      newProgressPercentage[day] = percentageForDay

      totalExercises += totalForDay
      totalCompleted += completedCountForDay
    })

    setProgressPercentage(newProgressPercentage)
    setOverallProgress(totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0)
  }

  // Update progress whenever completed exercises change
  useEffect(() => {
    updateAllProgress()
  }, [completedExercises, selectedGoal])

  return (
    <div className="space-y-6">
      <Card className="bg-dark-card border-neon-green/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-neon-yellow">Workout Generator</CardTitle>
              <CardDescription className="text-gray-400">
                Select your fitness goal to generate a personalized workout plan
              </CardDescription>
            </div>
            {showResults && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="bg-dark-lighter border border-neon-yellow text-neon-yellow hover:bg-dark hover:text-neon-yellow hover:border-neon-yellow transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <div className="space-y-6">
              <RadioGroup
                value={selectedGoal}
                onValueChange={(value) => setSelectedGoal(value as WorkoutGoal)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fat-loss" id="fat-loss" className="border-neon-yellow text-neon-yellow" />
                  <Label htmlFor="fat-loss" className="font-medium text-neon-yellow">
                    Fat Loss
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="muscle-gain"
                    id="muscle-gain"
                    className="border-neon-yellow text-neon-yellow"
                  />
                  <Label htmlFor="muscle-gain" className="font-medium text-neon-yellow">
                    Muscle Gain
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="strength" id="strength" className="border-neon-yellow text-neon-yellow" />
                  <Label htmlFor="strength" className="font-medium text-neon-yellow">
                    Strength
                  </Label>
                </div>
              </RadioGroup>

              <Button onClick={handleGenerateWorkout} className="w-full bg-neon-green text-dark hover:bg-neon-green/90">
                Generate Workout Plan
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-neon-yellow">
                    {selectedGoal === "fat-loss"
                      ? "Fat Loss"
                      : selectedGoal === "muscle-gain"
                        ? "Muscle Gain"
                        : "Strength"}{" "}
                    Plan
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-neon-green">{overallProgress}% Complete</div>
                    <CheckCircle2
                      className={`w-4 h-4 ${overallProgress === 100 ? "text-neon-green" : "text-gray-600"}`}
                    />
                  </div>
                </div>

                {/* Overall progress bar */}
                <div className="w-full h-2 bg-dark-lighter rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-neon-green transition-all duration-300 ease-in-out"
                    style={{ width: `${overallProgress}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">{workoutPlans[selectedGoal].description}</p>

                <Tabs
                  defaultValue="mon"
                  className="w-full"
                  value={activeDay}
                  onValueChange={(value) => setActiveDay(value)}
                >
                  <TabsList className="grid grid-cols-7 h-auto bg-dark-lighter">
                    {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
                      <TabsTrigger
                        key={day}
                        value={day}
                        className="text-xs py-2 data-[state=active]:bg-dark data-[state=active]:text-neon-yellow"
                      >
                        {day.charAt(0).toUpperCase() + day.slice(1, 3)}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
                    <TabsContent key={day} value={day} className="mt-4">
                      <Card className="bg-dark-card border-neon-green/20">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base text-neon-yellow">
                              {workoutPlans[selectedGoal].days[day].title}
                            </CardTitle>
                            <div className="text-xs text-neon-green">{progressPercentage[day]}% Complete</div>
                          </div>
                          {/* Day progress bar */}
                          <div className="w-full h-1.5 bg-dark-lighter rounded-full mt-2 overflow-hidden">
                            <div
                              className="h-full bg-neon-green transition-all duration-300 ease-in-out"
                              style={{ width: `${progressPercentage[day]}%` }}
                            ></div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                          {workoutPlans[selectedGoal].days[day].exercises.length > 0 ? (
                            <ul className="space-y-2">
                              {workoutPlans[selectedGoal].days[day].exercises.map((exercise, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Checkbox
                                    id={`${day}-exercise-${i}`}
                                    checked={completedExercises[day]?.[i] || false}
                                    onCheckedChange={() => toggleExerciseCompletion(day, i)}
                                    className="mt-0.5 border-neon-yellow data-[state=checked]:bg-neon-green data-[state=checked]:border-neon-green"
                                  />
                                  <label
                                    htmlFor={`${day}-exercise-${i}`}
                                    className={`text-sm cursor-pointer ${
                                      completedExercises[day]?.[i] ? "text-neon-green line-through" : "text-gray-400"
                                    }`}
                                  >
                                    {exercise}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">Rest day</p>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
