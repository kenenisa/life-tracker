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
        $date = $this->faker->dateTimeThisYear();
        return [
            'start' => $start = $this->faker->dateTimeBetween('-1 week', 'now'),
            'end' => $this->faker->dateTimeBetween($start->modify('+4 hours'), $start->modify('+8 hours')),
            'biometric_id' => Biometric::factory(),
            'user_id' => User::factory(),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
