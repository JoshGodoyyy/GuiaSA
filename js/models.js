const elMenu = document.getElementById('el-menu')
let menus = []
fetch('./model/menus.php')
    .then(response => response.json())
    .then(json => {
        json.forEach(item => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            li.classList = `nav-item ${item.genero.replace(/( )+/g, '_').toLowerCase()}`
            a.classList = 'nav-link link-dark'
            a.href = `${item.genero.toLowerCase()}`
            a.innerHTML = item.genero
            li.appendChild(a)

            elMenu.appendChild(li)

            li.onclick = function(e) {
                console.log(item.genero)
            }
        });
    })