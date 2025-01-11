<?php

namespace App\Http\Controllers;

use App\Models\Income;
use App\Models\Outcome;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getSummary()
    {
        // Ambil total income dan total outcome
        $totalIncome = Income::sum('total');
        $totalOutcome = Outcome::sum('total');

        
        $balance = $totalIncome - $totalOutcome;

     
        return response()->json([
            'success' => true,
            'message' => 'Ringkasan data dashboard berhasil diambil.',
            'data' => [
                'totalIncome' => $totalIncome,
                'totalOutcome' => $totalOutcome,
                'balance' => $balance,
            ]
        ], 200); 
    }
}
