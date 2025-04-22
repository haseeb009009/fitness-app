"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExerciseList } from "@/components/exercise-list"
import { WorkoutGenerator } from "@/components/workout-generator"
import { MacroCalculator } from "@/components/macro-calculator"
import { Dumbbell, Calculator, Home } from "lucide-react"
import { muscleData } from "@/data/muscle-data"
import { saveHomeState, loadHomeState } from "@/lib/local-storage"

export default function FitnessApp() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true)

    // Load saved state from localStorage
    const savedState = loadHomeState()
    setGender(savedState.gender)
    setSelectedMuscle(savedState.selectedMuscle)
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      saveHomeState({
        gender,
        selectedMuscle,
      })
    }
  }, [gender, selectedMuscle, isClient])

  const toggleGender = () => {
    setGender(gender === "male" ? "female" : "male")
    setSelectedMuscle(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      {/* Top Navigation */}
      <header className="sticky top-0 z-10 bg-dark-lighter border-b border-neon-green/20 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-6 h-6 text-neon-yellow" />
            <h1 className="text-xl font-bold text-neon-yellow">FitGuide</h1>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={toggleGender}
            className="bg-dark-lighter border border-neon-green text-neon-green hover:bg-dark hover:text-neon-yellow hover:border-neon-yellow transition-colors"
          >
            Toggle Gender ({gender === "male" ? "Male" : "Female"})
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Tabs defaultValue="home" className="w-full">
          <TabsContent value="home" className="m-0">
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex flex-col items-center justify-center p-4 bg-dark-card rounded-lg border border-neon-green/20">
                <h2 className="mb-4 text-lg font-semibold text-center text-neon-yellow">
                  {selectedMuscle ? `Selected: ${selectedMuscle}` : "Select a muscle group"}
                </h2>
                <div className="grid grid-cols-2 gap-3 w-full sm:grid-cols-3 md:grid-cols-5">
                  {muscleData.map((muscle) => (
                    <Button
                      key={muscle.name}
                      variant="default"
                      className={
                        selectedMuscle === muscle.name
                          ? "w-full h-12 bg-dark-lighter border-2 border-neon-green text-neon-green hover:bg-dark hover:border-neon-yellow hover:text-neon-yellow transition-colors"
                          : "w-full h-12 bg-dark-lighter border border-neon-yellow text-neon-yellow hover:bg-dark hover:border-neon-green hover:text-neon-green transition-colors"
                      }
                      onClick={() => setSelectedMuscle(selectedMuscle === muscle.name ? null : muscle.name)}
                    >
                      {muscle.name}
                    </Button>
                  ))}
                </div>
              </div>

              {selectedMuscle && (
                <ExerciseList
                  muscle={selectedMuscle}
                  exercises={muscleData.find((m) => m.name === selectedMuscle)?.exercises || []}
                />
              )}
            </div>
          </TabsContent>

          <TabsContent value="workout" className="m-0 p-4">
            <WorkoutGenerator />
          </TabsContent>

          <TabsContent value="macro" className="m-0 p-4">
            <MacroCalculator />
          </TabsContent>

          {/* Bottom Navigation */}
          <div className="sticky bottom-0 z-10 w-full bg-dark-lighter border-t border-neon-green/20">
            <TabsList className="w-full h-16 grid grid-cols-3 bg-dark-lighter">
              <TabsTrigger
                value="home"
                className="flex flex-col items-center justify-center data-[state=active]:bg-dark data-[state=active]:text-neon-yellow text-gray-400"
              >
                <Home className="w-5 h-5" />
                <span className="text-xs mt-1">Home</span>
              </TabsTrigger>
              <TabsTrigger
                value="workout"
                className="flex flex-col items-center justify-center data-[state=active]:bg-dark data-[state=active]:text-neon-yellow text-gray-400"
              >
                <Dumbbell className="w-5 h-5" />
                <span className="text-xs mt-1">Workouts</span>
              </TabsTrigger>
              <TabsTrigger
                value="macro"
                className="flex flex-col items-center justify-center data-[state=active]:bg-dark data-[state=active]:text-neon-yellow text-gray-400"
              >
                <Calculator className="w-5 h-5" />
                <span className="text-xs mt-1">Macros</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </main>
    </div>
  )
}
