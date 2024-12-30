<?php

namespace Database\Factories;

use App\Models\Biometric;
use App\Models\Sleep;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Sleep>
 */
class SleepFactory extends Factory
{
    protected $model = Sleep::class;

    public function definition()
    {
        return [
            'start' => $this->faker->dateTimeBetween('-1 week', 'now'),
            'end' => $this->faker->dateTimeBetween('now', '+1 week'),
            'biometric_id' => Biometric::factory(),
            'user_id' => User::factory(),
        ];
    }
}
