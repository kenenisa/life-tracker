<?php

namespace Database\Factories;

use App\Models\Biometric;
use App\Models\Fitness;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Fitness>
 */
class FitnessFactory extends Factory
{
    protected $model = Fitness::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'workout_id' => Workout::factory(),
            'biometric_id' => Biometric::factory(),
        ];
    }
}
