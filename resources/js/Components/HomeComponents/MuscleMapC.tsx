import React from "react";
import Model, { IExerciseData, IMuscleStats } from "react-body-highlighter";

export const MuscleMapC = () => {
  const [displayData, setDisplayData] = React.useState<String>("Muscle Map");
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
      setDisplayData(muscle + ":" + frequency + " exercises");
    },
    [data]
  );

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold'>{displayData}</h1>
        <p className='text-sm text-gray-500 ml-2'>
          click on a muscle to see the exercises you've done for it
        </p>
      </div>
      <div className='flex'>
        <Model
          data={data}
          style={{ width: "20rem", padding: "5rem" }}
          onClick={handleClick}
          highlightedColors={["#F6948C", "#D00000"]}
        />
        <Model
          type='posterior'
          data={data}
          style={{ width: "20rem", padding: "5rem" }}
          onClick={handleClick}
          highlightedColors={["#D00000", "#F6948C"]}
        />
      </div>
    </div>
  );
};
