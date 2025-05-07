echo off
title Symphony's Portrait Publishing
cls
echo Convert portrait sources directory to DDS and TGA for export/workshop upload.
echo.
echo Featuring Symmetric's nwn_crunch.exe
echo.
echo Last update to /sources directory:
forfiles /p .. /m sources /c "cmd /c echo @file @fdate @ftime"
echo.
echo Checking if publishing folder exists..
echo.
IF NOT EXIST "..\Enhanced Player Portrait Pack\override" (
    mkdir "..\Enhanced Player Portrait Pack\override"
    echo Directory created: "..\Enhanced Player Portrait Pack\override"
) ELSE (
    echo Directory already exists: "..\Enhanced Player Portrait Pack\override"
)
echo.
echo Ready to convert sources to DDS
pause
echo Converting to DDS
echo =====================
nwn_crunch.exe -file "..\sources\female\*.png" -outdir "..\Enhanced Player Portrait Pack\override" -fileformat dds -DXT1 -yflip -quiet
nwn_crunch.exe -file "..\sources\male\*.png" -outdir "..\Enhanced Player Portrait Pack\override" -fileformat dds -DXT1 -yflip -quiet
nwn_crunch.exe -file "..\sources\other\*.png" -outdir "..\Enhanced Player Portrait Pack\override" -fileformat dds -DXT1 -yflip -quiet
echo.
echo DDS Portraits Conversion Finished
echo.
pause