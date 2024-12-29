<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
    * Get the fitnesses associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function fitnesses(): HasMany
    {
        return $this->hasMany(Fitness::class)->chaperone();
    }

    /**
    * Get the finances associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function finances(): HasMany
    {
        return $this->hasMany(Finance::class)->chaperone();
    }

    /**
    * Get the budgets associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function budgets(): HasMany
    {
        return $this->hasMany(Budget::class)->chaperone();
    }

    /**
    * Get the categories associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function categories(): HasMany
    {
        return $this->hasMany(Category::class)->chaperone();
    }

    /**
    * Get the workouts associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function workouts(): HasMany
    {
        return $this->hasMany(Workout::class)->chaperone();
    }

    /**
    * Get the diets associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function diets(): HasMany
    {
        return $this->hasMany(Diet::class)->chaperone();
    }

    /**
    * Get the sleeps associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function sleeps(): HasMany
    {
        return $this->hasMany(Sleep::class)->chaperone();
    }

    /**
    * Get the meals associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function meals(): HasMany
    {
        return $this->hasMany(Meal::class)->chaperone();
    }

    /**
    * Get the biometrics associated with the user.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function biometrics(): HasMany
    {
        return $this->hasMany(Biometric::class)->chaperone();
    }
}
