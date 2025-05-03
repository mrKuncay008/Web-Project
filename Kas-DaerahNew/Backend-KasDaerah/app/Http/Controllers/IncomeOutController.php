<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Income as ModelsIncome;
use App\Models\Outcome as ModelsOutcome;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class IncomeOutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $incomes = ModelsIncome::all();
        $outcomes = ModelsOutcome::all();

        return response()->json([
            'table_income' => $incomes,
            'table_outcome' => $outcomes,
        ]);
    }

    public function getIncome()
    {
        $incomes = ModelsIncome::all();

        return response()->json([
            'table_income' => $incomes,
        ]);
    }

    public function getOutcome()
    {
        $outcomes = ModelsOutcome::all();

        return response()->json([
            'table_outcome' => $outcomes,
        ]);
    }

    public function storeIncome(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required',
            'date_colmn' => 'required|date',
        ]);

        $total = str_replace('.', '', $validatedData['total']);

        $income = new ModelsIncome;
        $income->total = $total;
        $income->name = $validatedData['name'];
        $income->date_colmn = $validatedData['date_colmn'];
        $income->save();

        return response()->json([
            'success',
            'Income successfully created!'
        ]);
    }

    public function storeOutcome(Request $request)
    {
        // Validasi input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required',
            'date_colmn' => 'required|date',
        ]);


        $total = str_replace('.', '', $validatedData['total']);


        $income = new ModelsOutcome();
        $income->total = $total;
        $income->name = $validatedData['name'];
        $income->date_colmn = $validatedData['date_colmn'];
        $income->save();


        return response()->json([
            'message' => 'Outcome successfully created!',
            'data' => $income
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function showIncome($id)
    {
        $income = ModelsIncome::find($id);

        if ($income) {
            return response()->json([
                'success' => true,
                'message' => 'Data income berhasil diambil.',
                'data' => $income,
            ], 200); 
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data income tidak ditemukan.',
                'data' => null,
            ], 404); 
        }
    }


    public function showOutcome($id)
    {
        $outcome = ModelsOutcome::find($id);

        if ($outcome) {
            return response()->json([
                'success' => true,
                'message' => 'Data outcome berhasil diambil.',
                'data' => $outcome,
            ], 200); 
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data outcome tidak ditemukan.',
                'data' => null,
            ], 404); 
        }
    }

    public function updateIncome(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required',
            'date_colmn' => 'required|date',
        ]);

        // Menghilangkan titik pada total sebelum disimpan
        $validatedData['total'] = str_replace('.', '', $validatedData['total']);

        // Temukan data income berdasarkan ID
        $income = ModelsIncome::find($id);

        if ($income) {
            
            $income->update($validatedData);

            return response()->json([
                'success' => true,
                'message' => 'Data income berhasil diperbarui.',
                'data' => $income,
            ], 200); // HTTP 200 OK
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data income tidak ditemukan.',
                'data' => null,
            ], 404);
        }
    }


    public function updateOutcome(Request $request, string $id)
    {
        // Validasi input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'total' => 'required',
            'date_colmn' => 'required|date',
        ]);

        // Menghilangkan titik pada total sebelum disimpan
        $validatedData['total'] = str_replace('.', '', $validatedData['total']);

        // Temukan data outcome berdasarkan ID
        $outcome = ModelsOutcome::find($id);

        if ($outcome) {
     
            $outcome->update($validatedData);

            return response()->json([
                'success' => true,
                'message' => 'Data outcome berhasil diperbarui.',
                'data' => $outcome,
            ], 200); // HTTP 200 OK
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data outcome tidak ditemukan.',
                'data' => null,
            ], 404);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroyIncome(string $id)
    {
        $income = ModelsIncome::find($id);

        if ($income) {
           
            $income->delete();

            return response()->json([
                'success' => true,
                'message' => 'Data income berhasil dihapus.',
            ], 200); // HTTP 200 OK
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data income tidak ditemukan.',
            ], 404); // HTTP 404 Not Found
        }
    }

    public function exportExcel() {
        $incomes = ModelsIncome::all();
        $outcomes = ModelsOutcome::all();

        $spreadsheet = new Spreadsheet();
        
        $incomeSheet = $spreadsheet->setActiveSheetIndex(0);
        $incomeSheet->setTitle('Incomes');
        $incomeSheet->setCellValue('A1', 'Name');
        $incomeSheet->setCellValue('B1', 'Date');
        $incomeSheet->setCellValue('C1', 'Total');

        foreach ($incomes as $index => $income) {
            $incomeSheet->setCellValue('A' . ($index + 2), $income->name);
            $incomeSheet->setCellValue('B' . ($index + 2), $income->date_colmn);
            $incomeSheet->setCellValue('C' . ($index + 2), $income->total);
        }

        $spreadsheet->createSheet();
        $outcomeSheet = $spreadsheet->setActiveSheetIndex(1);
        $outcomeSheet->setTitle('Outcomes');
        $outcomeSheet->setCellValue('A1', 'Name');
        $outcomeSheet->setCellValue('B1', 'Date');
        $outcomeSheet->setCellValue('C1', 'Total');

        foreach ($outcomes as $index => $outcome) {
            $outcomeSheet->setCellValue('A' . ($index + 2), $outcome->name);
            $outcomeSheet->setCellValue('B' . ($index + 2), $outcome->date_colmn);
            $outcomeSheet->setCellValue('C' . ($index + 2), $outcome->total);
        }

        $spreadsheet->setActiveSheetIndex(0);

        $fileName = "Income_Outcome_" . date('Y-m-d_H-i-s') . ".xlsx";
        $filePath = storage_path("app/public/{$fileName}");

        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);

        return response()->download($filePath)->deleteFileAfterSend();
    }

    public function destroyOutcome(string $id)
    {
        $income = ModelsOutcome::find($id);

        if ($income) {
            $income->delete();

            return response()->json([
                'success' => true,
                'message' => 'Data income berhasil dihapus.',
            ], 200); 
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data income tidak ditemukan.',
            ], 404); 
        }
    }
}
