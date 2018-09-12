<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request){

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        return response()->json(['status' => 'success'], 200);
    }

    public function create2() {
        return view('welcome2');
    }
}
