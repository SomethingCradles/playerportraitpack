@echo off
setlocal

REM Navigate to the specific directory
cd /d "%~dp0..\sources"

REM Delete files ending with _h.png in all subdirectories
echo Deleting files with _h.png in all subdirectories
for /R %%f in (*_h.png) do (
    echo Deleting %%f
    del "%%f"
)

echo Deletion complete.
pause
