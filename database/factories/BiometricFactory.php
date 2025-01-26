<?php

namespace Database\Factories;

use App\Models\Biometric;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
//
/**
 * @extends Factory<Biometric>
 */
class BiometricFactory extends Factory
{
    protected $model = Biometric::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'weight' => $this->faker->randomFloat(2, 50, 100),
            'height' => $this->faker->randomFloat(2, 150, 200),
        ];
    }
}
