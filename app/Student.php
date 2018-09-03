<?php

namespace Jiri;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
	protected $fillable = [
		'name', 'email', 'phone', 'bloc', 'is_available'
	];
	
	public function projects()
	{
		return $this->belongsToMany( 'Jiri\Project')->withPivot('id', 'site_url', 'site_account', 'site_password', 'github_url', 'is_available')->withTimestamps();;
	}
	
	
}
