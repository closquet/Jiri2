<?php

namespace Jiri;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
	protected $fillable = [
		'name', 'bloc', 'description'
	];
	
	public function students()
	{
		return $this->belongsToMany( 'Jiri\Student')->withPivot('id', 'site_url', 'site_account', 'site_password', 'github_url', 'is_available')->withTimestamps();
	}
}
