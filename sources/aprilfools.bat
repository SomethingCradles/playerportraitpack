@echo off
setlocal enabledelayedexpansion

rem Set the paths to the replacement images
set "rImage_s=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\joke_s.png"
set "rImage_t=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\joke_t.png"
set "rImage_m=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\joke_m.png"
set "rImage_h=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\joke_h.png"
set "rImage_l=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\joke_l.png"

rem Set the paths to the target folders
set "tFolder=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\female"
set "tFolder2=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\male"
set "tFolder3=C:\Users\Scott\Documents\GitHub\playerportraitpack\sources\other"

rem Loop through each target folder
for %%F in ("%tFolder%\*.png" "%tFolder2%\*.png" "%tFolder3%\*.png") do (
    rem Get the filename and extension
    set "fileName=%%~nF"
    set "fileExt=%%~xF"

    rem Determine which replacement image to use based on the filename suffix
    if "!fileName:~-2!"=="_s" (
        set "currentRImage=!rImage_s!"
    ) else if "!fileName:~-2!"=="_t" (
        set "currentRImage=!rImage_t!"
    ) else if "!fileName:~-2!"=="_m" (
        set "currentRImage=!rImage_m!"
    ) else if "!fileName:~-2!"=="_h" (
        set "currentRImage=!rImage_h!"
    ) else if "!fileName:~-2!"=="_l" (
        set "currentRImage=!rImage_l!"
    )

    rem Copy the replacement image to the target file
    copy /Y "!currentRImage!" "%%~dpF!fileName!!fileExt!" > nul
    echo Replaced: %%~dpF!fileName!!fileExt!
)

pause
