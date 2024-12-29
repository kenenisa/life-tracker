<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Workout extends Model
{
    //
    /**
     * Get the user that owns the workout.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the fitness associated with the workout
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function fitnesses(): HasMany
    {
        return $this->hasMany(Fitness::class)->chaperone();
    }
}
