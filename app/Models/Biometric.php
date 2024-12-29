<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Biometric extends Model
{
    //
    /**
     * Get the user that owns the Biometric.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the sleeps associated with the Biometric.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function sleeps(): HasMany
    {
        return $this->hasMany(Sleep::class)->chaperone();
    }

    /**
    * Get the diets associated with the Biometric.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function diets(): HasMany
    {
        return $this->hasMany(Sleep::class)->chaperone();
    }

    /**
    * Get the fitnesses associated with the Biometric.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function fitnesses(): HasMany
    {
        return $this->hasMany(Fitness::class)->chaperone();
    }

}
