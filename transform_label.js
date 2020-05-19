var fs = require('fs');
const testFolder = 'labels/train';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
var content = fs.readFileSync("labels/train/"+file,"utf8");
console.log(content);
const objects = content.split('\n').map(profile => {
    const p = profile.split(' ');
    var value_mask = "Mask";
    if (p[0]==0) value_mask ="NoMask";
    myObj = {
            object: value_mask,
            location: {
                left: Math.round((p[1]*600)-(p[3]*600/2)),
                top: Math.round((p[2]*600)-(p[4]*600/2)),
                width: Math.round(p[3]*600),
                height: Math.round(p[4]*600)
            }
    }
    return myObj;
});
var resul = { 
    objects
}
resul.objects= resul.objects.slice(0,resul.objects.length-1);
console.log(JSON.stringify(resul) + " " + resul.objects.length);

fs.writeFile("labels/WVR_train/"+file, JSON.stringify(resul), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

});
});