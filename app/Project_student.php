<?php

namespace Jiri;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Project_student extends Pivot
{
    protected $fillable = [
		'student_id', 'project_id', 'site_url', 'site_account', 'site_password', 'github_url', 'is_available'
	];
}
