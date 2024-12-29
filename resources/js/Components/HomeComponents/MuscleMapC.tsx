import React from "react";
import Model, { IExerciseData, IMuscleStats } from "react-body-highlighter";

export const MuscleMapC = () => {
  const data: IExerciseData[] = [
    { name: "Bench Press", muscles: ["chest", "triceps", "front-deltoids"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Push Ups", muscles: ["chest"] },
    { name: "Pull Ups", muscles: ["upper-back", "biceps"] },
    { name: "Deadlift", muscles: ["lower-back", "hamstring", "gluteal"] },
    { name: "Squats", muscles: ["quadriceps", "hamstring", "gluteal"] },
    { name: "Leg Press", muscles: ["quadriceps", "hamstring", "gluteal"] },
    { name: "Shoulder Press", muscles: ["front-deltoids"] },
    { name: "Bicep Curls", muscles: ["biceps"] },
    { name: "Tricep Extensions", muscles: ["triceps"] },
  ];

  const handleClick = React.useCallback(
    ({ muscle, data }: IMuscleStats) => {
      const { exercises, frequency } = data;

      alert(
        `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(exercises)}`
      );
    },
    [data]
  );

  return (
    <div className='flex'>
      <Model
        data={data}
        style={{ width: "20rem", padding: "5rem" }}
        onClick={handleClick}
        highlightedColors={["#D6745C", "#06745C"]}
      />
      <Model
        type='posterior'
        data={data}
        style={{ width: "20rem", padding: "5rem" }}
        onClick={handleClick}
        highlightedColors={["#D6745C", "#06745C"]}
      />
    </div>
  );
};
