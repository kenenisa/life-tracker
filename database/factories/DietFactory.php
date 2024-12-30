<?php

namespace Database\Factories;

use App\Models\Biometric;
use App\Models\Diet;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Diet>
 */
class DietFactory extends Factory
{
    protected $model = Diet::class;

    public function definition()
    {
        return [
            'calories' => $this->faker->randomFloat(2, 500, 2000),
            'biometric_id' => Biometric::factory(),
            'description' => $this->faker->sentence(),
            'user_id' => User::factory(),
        ];
    }
}
