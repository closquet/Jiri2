<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_student', function (Blueprint $table) {
            $table->increments('id');
            $table->increments('student_id');
            $table->increments('project_id');
            $table->string('site_url');
            $table->string('site_account')->nullable();
            $table->string('site_password')->nullable();
            $table->string('github_url');
            $table->boolean('is_available')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_student');
    }
}
