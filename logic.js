
let num_players = 5

let attack_ops = [
    ['sledge', 'thatcher', 'ash', 'thermite', 'twitch', 'montagne', 'glaz'],
    ['fuze', 'blitz', 'iq', 'buck', 'blackbeard', 'capitao', 'hibana'],
    ['jackal', 'ying', 'zofia', 'dokkaebi', 'lion', 'finka', 'maverick'],
    ['nomad', 'gridlock', 'nokk', 'amaru', 'kali', 'iana', 'ace'],
    ['zero', 'flores', 'osa']
]

let defense_ops = [
    ['smoke', 'mute', 'castle', 'pulse', 'doc', 'rook', 'kapkan'],
    ['tachanka', 'jager', 'bandit', 'frost', 'valkyrie', 'caveira', 'echo'],
    ['mira', 'lesion', 'ela', 'vigil', 'maestro', 'alibi', 'clash'],
    ['kaid', 'mozzie', 'warden', 'goyo', 'wamai', 'oryx', 'melusi'],
    ['aruni', 'thunderbird']
]

function init() {
    // Duplicate and Differentiate Player Selectors
    let player_display = document.getElementById('section-player-selector')
    let player_templ = document.getElementById('player-display-1')
    for (let i = 2; i <= num_players; i++)
    {
        let next = player_templ.cloneNode(true)
        // differentiate card properties
        next.id = 'player-display-' + i
        next.onmouseenter = () => hover_player_card(i, true)
        next.onmouseleave = () => hover_player_card(i, false)
        next.onclick = () => click_player_card(i)
        // differentiate input properties
        let nextinput = next.querySelector('input')
        nextinput.id = 'player-name-' + i
        nextinput.name = 'player-name-' + i
        // differentiate portrait properties
        next.querySelector('img').id = 'player-portrait-' + i
        // differentiate history properties
        next.querySelector('table').id = 'player-history-' + i
        for (cell of next.querySelectorAll('td')) {
            cell.id = 'p' + i + cell.id.substring(2)
        }
        player_display.appendChild(next)
    }
    // Populate operator lists
    let attack_table = document.getElementById('attack-operators')
    fill_ops(attack_ops, attack_table, 'atk')
    let defense_table = document.getElementById('defense-operators')
    fill_ops(defense_ops, defense_table, 'def')
}

function fill_ops(ops, table, label) {
    for (row of ops) {
        let table_row = document.createElement('tr')
        for (op of row) {
            let cell = document.createElement('td')
            let btn = document.createElement('button')
            let s1 = document.createElement('div')
            let s2 = document.createElement('div')
            btn.id = 'op-' + label + '-' + op
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
        table.appendChild(table_row)
    }
}

function set_mode(attack) {
    let attack_table = document.getElementById('attack-operators')
    let defense_table = document.getElementById('defense-operators')
    if (attack) {
        attack_table.classList.remove('invisible')
        defense_table.classList.add('invisible')
    } else {
        attack_table.classList.add('invisible')
        defense_table.classList.remove('invisible')
    }
}

function hover_player_card(player, activate) {
    console.log('hover player card ' + player + ' ' + activate);
    let portrait = document.getElementById('player-portrait-' + player)
    let history = document.getElementById('player-history-' + player)
    if (activate) {
        portrait.classList.add('invisible')
        history.classList.remove('invisible')
    } else {
        portrait.classList.remove('invisible')
        history.classList.add('invisible')
    }
}

function click_player_card(player) {
    console.log('click player card ' + player);
}

