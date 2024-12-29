<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    //
    /**
    * Get the user that owns the category.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the finances associated with the category.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function finances(): HasMany
    {
        return $this->hasMany(Finance::class)->chaperone();
    }


    /**
    * Get the budgets associated with the category.
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function budgets(): HasMany
    {
        return $this->hasMany(Budget::class)->chaperone();
    }
}
