<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::factory()
            ->hasCategories(10)
            ->hasBiometrics(100)
            ->hasFinances(200)
            ->hasWorkouts(10)
            ->hasFitnesses(265)
            ->hasDiets(700)
            ->hasSleeps(800)
            ->hasMeals(15)
            ->create();
    }
}
