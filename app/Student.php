<?php

namespace Jiri;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
	protected $fillable = [
		'name', 'email', 'phone', 'bloc', 'is_available'
	];
}
