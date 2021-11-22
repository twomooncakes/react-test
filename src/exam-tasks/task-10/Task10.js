/* Task 10
Įsivaizduokite, kad papasakojate žemiau pateiktą JOKE kolegai, kuris nėra dirbęs
su React.js ir jis nesijuokia, nes nesuprata jo. Paaiškinkite žemiau jį jam

JOKE:
Why couldn’t the React component understand the joke? 
Because it didn’t get the context.

Jūsų paaiškinimas:

React'o kontekstas leidžia dalintis informacija su bet kuriuo komponentu. Paprastai, tai būtų daroma su perdavimu iš tėvinio elemento į vaikinį(prop drilling), bet konteksto naudojimas leidžia to išvengti ir viską supaprastina. Norint panaudoti kontekstą, jį aprašome ir suteikiame prieigą prie konteksto reikšmių bet kuriam komponentui pagal poreikį. 
React'o komponentas nesuprato anekdoto todėl, kad greičiausiai negali pasiekti konteksto failo ir jo reikšmių, nes Context Provider komponentas jo neapima ir/arba komponento faile trūksta konteksto importo ir atitinkamo kintamojo.

*/
