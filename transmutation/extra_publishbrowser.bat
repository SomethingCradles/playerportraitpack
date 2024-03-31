echo off
title Regnant's Portrait Publishing
cls
echo Convert portrait sources directory to webp for EEPPP's Portrait Browser.
echo.
echo Featuring Google's cwebp
echo Courtesy of Symphony
echo.
echo Last update to /sources directory:
forfiles /p .. /m sources /c "cmd /c echo @file @fdate @ftime"
echo.
echo Ready to convert sources to webp
pause
echo Converting to webp
echo =====================
forfiles /P ..\sources\extra_female /M *h.png /c "cmd /c ..\..\transmutation\cwebp.exe -m 6 -lossless -noalpha -hint picture @relpath -o ..\..\browser\extra_female\\@fname.webp"
forfiles /P ..\sources\extra_male /M *h.png /c "cmd /c ..\..\transmutation\cwebp.exe -m 6 -lossless -noalpha -hint picture @relpath -o ..\..\browser\extra_male\\@fname.webp"
forfiles /P ..\sources\extra_other /M *h.png /c "cmd /c ..\..\transmutation\cwebp.exe -m 6 -lossless -noalpha -hint picture @relpath -o ..\..\browser\extra_other\\@fname.webp"
echo Renaming files to portraitID
ren "..\browser\extra_female\*_h.webp" "*_"
ren "..\browser\extra_male\*_h.webp" "*_"
ren "..\browser\extra_other\*_h.webp" "*_"
ren "..\browser\extra_female\*_" "*_.webp"
ren "..\browser\extra_male\*_" "*_.webp"
ren "..\browser\extra_other\*_" "*_.webp"
echo.
echo Conversion Finished
pause