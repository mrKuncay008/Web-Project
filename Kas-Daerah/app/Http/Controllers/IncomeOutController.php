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

    public function destroyIncome($id)
    {
        $income = ModelsIncome::find($id);
        if ($income) {
            $income->delete();
            return response()->json(['message'=> 'Data Sukses Delete']);
        } else {
            return response()->json(['message'=> 'Income not found'], 404);
        }
    }

    public function destroyOutcome($id)
    {
        $outcome = ModelsOutcome::find($id);
        if ($outcome) {
            $outcome->delete();
            return response()->json(['message'=> 'Data Sukses Delete']);
        } else {
            return response()->json(['message'=> 'Outcome not found'], 404);
        }
    }
}
