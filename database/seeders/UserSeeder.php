<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Biometric;
use App\Models\Finance;
use App\Models\Workout;
use App\Models\Fitness;
use App\Models\Diet;
use App\Models\Sleep;
use App\Models\Meal;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create one user with a static email
        $user = User::factory()->create([
            'email' => 'brooksolo@gmail.com',
        ]);

        // Use the same user ID to create related data
        $user->categories()->createMany(Category::factory()->count(10)->make()->toArray());
        $user->biometrics()->createMany(Biometric::factory()->count(100)->make()->toArray());
        $user->finances()->createMany(Finance::factory()->count(200)->make()->toArray());
        $user->workouts()->createMany(Workout::factory()->count(10)->make()->toArray());
        $user->fitnesses()->createMany(Fitness::factory()->count(265)->make()->toArray());
        $user->diets()->createMany(Diet::factory()->count(700)->make()->toArray());
        $user->sleeps()->createMany(Sleep::factory()->count(800)->make()->toArray());
        $user->meals()->createMany(Meal::factory()->count(15)->make()->toArray());
    }
}
