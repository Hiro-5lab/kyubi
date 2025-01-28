<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hits', function (Blueprint $table) {
            $table->id();
            $table->boolean('hit1');
            $table->boolean('hit2')->nullable();
            $table->boolean('hit3')->nullable();
            $table->boolean('hit4')->nullable();
            $table->boolean('hit5')->nullable();
            $table->boolean('hit6')->nullable();
            $table->boolean('hit7')->nullable();
            $table->boolean('hit8')->nullable();
            $table->boolean('hit9')->nullable();
            $table->boolean('hit10')->nullable();
            $table->boolean('hit11')->nullable();
            $table->boolean('hit12')->nullable();
            $table->boolean('hit13')->nullable();
            $table->boolean('hit14')->nullable();
            $table->boolean('hit15')->nullable();
            $table->boolean('hit16')->nullable();
            $table->boolean('hit17')->nullable();
            $table->boolean('hit18')->nullable();
            $table->boolean('hit19')->nullable();
            $table->boolean('hit20')->nullable();
            $table->integer('hits');
            $table->integer('sum');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hits');
    }
};
