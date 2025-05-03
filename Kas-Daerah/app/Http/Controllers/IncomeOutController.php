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

    public function storeIncome(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required|numeric',
            'date_colmn' => 'required|date',
        ]);

        $income = new ModelsIncome;
        $income->total = $validatedData['total'];
        $income->name = $validatedData['name'];
        $income->date_colmn = $validatedData['date_colmn'];
        $income->save();

        return redirect()->back()->with('success', 'Income successfully created!');
    }
    public function storeOutcome(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required|numeric',
            'date_colmn' => 'required|date',
        ]);

        $income = new ModelsOutcome();
        $income->total = $validatedData['total'];
        $income->name = $validatedData['name'];
        $income->date_colmn = $validatedData['date_colmn'];
        $income->save();

        return redirect()->back()->with('success', 'Income successfully created!');
    }

    public function updateIncome(Request $request, $id) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required|numeric',
            'date_column' => 'required|date',
        ]);

        $income = ModelsIncome::find($id);
        if (!$income) {
            return redirect()->back()->with('error', 'Income not found');
        }
        $income = new ModelsIncome();
        $income->total = $validatedData['total'];
        $income->name = $validatedData['name'];
        $income->date_colmn = $validatedData['date_colmn'];
        $income->save();

        return redirect()->back()->with('success', 'Income successfully Update!');
    } 

    public function destroyIncome($id) {
        $income = ModelsIncome::find($id);
        $income->delete();
        
        return redirect()->back()->with('success', 'Data Sukses Delete');
    }

    public function destroyOutcome($id) {
        $outcome = ModelsOutcome::find($id);
        $outcome->delete();

        return redirect()->back()->with('success', 'Data Sukses Delete');
    }
}
