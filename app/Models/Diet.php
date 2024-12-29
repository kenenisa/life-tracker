<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Diet extends Model
{
    //
    /**
     * Get the user that owns the diet.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the biometric that owns the diet.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function biometric(): BelongsTo
    {
        return $this->belongsTo(Biometric::class);
    }

    /**
     * Get the mean that owns the diet.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function meal(): BelongsTo
    {
        return $this->belongsTo(Meal::class);
    }
}
