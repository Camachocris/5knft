var data = require('./metadata.json');
var newData = []

for (let index = 0; index < data.length; index++) {
    let value = data[index];
    if (value.metadata) {
        let item = {

            holder: value.metadata.properties.creators[0].address,
            mint: value.mint,
            traits: value.metadata.attributes
        }
        newData.push(item)
    }
}

var jsonData = JSON.stringify(newData);
var fs = require('fs');

fs.writeFile("./finalist.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});
