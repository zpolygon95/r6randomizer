
let num_players = 5

let attack_ops = [
    ['sledge', 'thatcher', 'ash', 'thermite', 'twitch', 'montagne', 'glaz'],
    ['fuze', 'blitz', 'iq', 'buck', 'blackbeard', 'capitao', 'hibana'],
    ['jackal', 'ying', 'zofia', 'dokkaebi', 'lion', 'finka', 'maverick'],
    ['nomad', 'gridlock', 'nokk', 'amaru', 'kali', 'iana', 'ace'],
    ['zero', 'flores', 'osa']
]

let defense_ops = [

]

function init() {
    // Duplicate and Differentiate Player Selectors
    let player_display = document.getElementById('section-player-selector')
    let player_templ = document.getElementById('player-display-1')
    for (let i = 2; i <= num_players; i++)
    {
        let next = player_templ.cloneNode(true)
        // TODO: differentiate node ids
        player_display.appendChild(next)
    }
    // Populate operator lists
    let attack_table = document.getElementById('attack-operators')
    for (row of attack_ops) {
        let table_row = document.createElement('tr')
        for (op of row) {
            let cell = document.createElement('td')
            let btn = document.createElement('button')
            let s1 = document.createElement('div')
            let s2 = document.createElement('div')
            btn.id = 'op-atk-' + op
            let img = document.createElement('img')
            img.src = 'img/' + op + '.svg'
            img.alt = op
            s1.appendChild(img)
            s2.innerText = op
            btn.appendChild(s1)
            btn.appendChild(s2)
            cell.appendChild(btn)
            table_row.appendChild(cell)
        }
        attack_table.appendChild(table_row)
    }
}
