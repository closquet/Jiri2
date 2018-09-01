<?php

namespace Jiri;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
	protected $fillable = [
		'name', 'email', 'phone', 'bloc', 'is_available'
	];
	
	public function project()
	{
		return $this->belongsToMany( 'Jiri\Project')->withPivot('site_url', 'site_account', 'site_password', 'github_url', 'is_available')->withTimestamps();;
	}
	
	
}
