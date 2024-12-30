<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Workout>
 */
class WorkoutFactory extends Factory
{
    protected $model = Workout::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'weight' => $this->faker->randomFloat(2, 50, 100),
            'duration' => $this->faker->numberBetween(30, 120),
            'calories' => $this->faker->randomFloat(2, 200, 800),
            'user_id' => User::factory(),
        ];
    }
}
