<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sleep extends Model
{
    //
    /**
     * Get the user that owns the sleep.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the biometric that owns the sleep.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function biometric(): BelongsTo
    {
        return $this->belongsTo(Biometric::class);
    }
}
