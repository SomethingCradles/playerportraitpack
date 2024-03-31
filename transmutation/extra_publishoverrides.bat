echo off
title Regnant's Portrait Publishing
cls
echo Convert portrait sources directory to DDS and TGA for export/workshop upload.
echo.
echo Featuring Symmetric's nwn_crunch.exe
echo Courtesy of Symphony
echo.
echo Last update to /sources directory:
forfiles /p .. /m sources /c "cmd /c echo @file @fdate @ftime"
echo.
echo Ready to convert sources to DDS
pause
echo Converting to DDS
echo =====================
nwn_crunch.exe -file "..\sources\extra_female\*.png" -outdir "..\Extra Enhanced Player Portrait Pack\override" -fileformat dds -DXT1 -yflip -quiet
nwn_crunch.exe -file "..\sources\extra_male\*.png" -outdir "..\Extra Enhanced Player Portrait Pack\override" -fileformat dds -DXT1 -yflip -quiet
nwn_crunch.exe -file "..\sources\extra_other\*.png" -outdir "..\Extra Enhanced Player Portrait Pack\override" -fileformat dds -DXT1 -yflip -quiet
echo.
echo DDS Portraits Conversion Finished
echo.
echo Ready to convert medium portraits to TGA
echo Converting to TGA
echo =====================
nwn_crunch.exe -file "..\sources\extra_female\*m.png" -outdir "..\Extra Enhanced Player Portrait Pack\portraits" -fileformat tga -quiet
nwn_crunch.exe -file "..\sources\extra_male\*m.png" -outdir "..\Extra Enhanced Player Portrait Pack\portraits" -fileformat tga -quiet
nwn_crunch.exe -file "..\sources\extra_other\*m.png" -outdir "..\Extra Enhanced Player Portrait Pack\portraits" -fileformat tga -quiet
echo Conversion Finished
pause