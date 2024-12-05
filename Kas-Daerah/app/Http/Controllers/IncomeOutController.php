<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Income as ModelsIncome;
use App\Models\Outcome as ModelsOutcome;

class IncomeOutController extends Controller
{
    public function apIndex () {
        
        $incomes = ModelsIncome::all();
        $outcomes = ModelsOutcome::all();

        return response()->json([
            'table_income' => $incomes,
            'table_outcome' => $outcomes,
        ]);
    }

    public function destroy(ModelsIncome $incomes)
    {
        $incomes->delete();
        return response()->json(['message'=> 'Data Sukses Delete']);
    }
}
