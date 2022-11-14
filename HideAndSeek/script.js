let PlayPosX;
let PlayPosY;

function tableCreate(w, h) {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '50vw';
    tbl.style.height = '50vw';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < h; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < w; j++) {
            if (false) {
                break
            } else {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                td.id = i + "_" + j;
                td.onclick = press;
                if (i == 0 || i == h - 1 || j == 0 || j == w - 1) {
                    td.style.backgroundColor = "#1a140f"
                }
                // i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

function press() {
    const tid = this.id;
    const splited = tid.split('_');
    let tX = splited[0];
    let tY = splited[1];
    console.log(tX + " " + tY);
    if (PlayPosX == null && PlayPosY == null) {
        PlayPosX = tX;
        PlayPosY = tY;
        this.style.backgroundColor = "red";
    } else if ((tX - 1 == PlayPosX && tY == PlayPosY) || (tX == PlayPosX - 1 && tY == PlayPosY) || (tX == PlayPosX && tY == PlayPosY - 1) || (tX == PlayPosX && tY - 1 == PlayPosY)) {
        let Old = [PlayPosX, PlayPosY];
        let OldId = Old.join("_");
        this.style.backgroundColor = "red";
        document.getElementById(OldId).style.backgroundColor = "beige";
        PlayPosX = tX;
        PlayPosY = tY;
        console.log(tX + " " + tY);
    }
}

function LoadPlayer() {
    fetch("./dat/com.txt").then(function (response) {
        response.text().then(function (text) {
            console.log(text)
        });
    });
    const replace = require('replace-in-file');
    if (text == "0") {
        console.log("replace 0");
        const options = {
            files: './dat/com.txt',
            from: "0",
            to: '1',
        };
    } else if (text == "1") {
        console.log("replace 1");
        const options = {
            files: './dat/com.txt',
            from: "1",
            to: '0',
        };
}
}

tableCreate(15, 15);
LoadPlayer();
