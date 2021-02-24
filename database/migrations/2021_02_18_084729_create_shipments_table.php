<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->integer('expired');
            $table->decimal('price_in', 2);
            $table->decimal('price_out', 2);
            $table->integer('amount_in');
            $table->integer('amount_out');
            $table->integer('amount_back');
            $table->integer('amount_current');
            $table->integer('status');
            $table->integer('product_id');
            $table->integer('supply_id');
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
        Schema::dropIfExists('shipments');
    }
}
