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
            $table->boolean('hit2');
            $table->boolean('hit3');
            $table->boolean('hit4');
            $table->boolean('hit5');
            $table->boolean('hit6');
            $table->boolean('hit7');
            $table->boolean('hit8');
            $table->boolean('hit9');
            $table->boolean('hit10');
            $table->boolean('hit11');
            $table->boolean('hit12');
            $table->boolean('hit13');
            $table->boolean('hit14');
            $table->boolean('hit15');
            $table->boolean('hit16');
            $table->boolean('hit17');
            $table->boolean('hit18');
            $table->boolean('hit19');
            $table->boolean('hit20');
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
