<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Finance;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Finance>
 */
class FinanceFactory extends Factory
{
    protected $model = Finance::class;

    public function definition()
    {
        return [
            'income' => $this->faker->randomFloat(2, 1000, 5000),
            'expense' => $this->faker->randomFloat(2, 100, 1000),
            'category_id' => Category::factory(),
            'user_id' => User::factory(),
        ];
    }
}
