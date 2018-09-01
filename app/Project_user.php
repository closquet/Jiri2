<?php

namespace Jiri;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Project_user extends Pivot
{
	protected $fillable = [
		'student_id', 'project_id', 'site_url', 'site_password', 'github_url', 'is_available'
	];
}
