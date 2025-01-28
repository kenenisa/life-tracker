<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Fitness extends Model
{
    use HasFactory;
    //get the user...
    /**
    * Get the user that owns the fitness.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the workout that owns the fitness.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function workout(): BelongsTo
    {
        return $this->belongsTo(Workout::class);
    }

    /**
    * Get the biometrics that owns the fitness.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function biometric(): BelongsTo
    {
        return $this->belongsTo(Biometric::class);
    }
}
