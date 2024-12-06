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
        $income->delete();
        
        return redirect()->back()->with('success', 'Data Sukses Delete');
    }

    public function destroyOutcome($id)
    {
        $outcome = ModelsOutcome::find($id);
        $outcome->delete();

        return redirect()->back()->with('success', 'Data Sukses Delete');
    }
}
