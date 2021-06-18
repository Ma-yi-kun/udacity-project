@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"E:\project09\bin\ruby.exe" "E:/project09/bin/sass-convert" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"E:\project09\bin\ruby.exe" "%~dpn0" %*
