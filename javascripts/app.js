var fetchStats = new Vue({
    el:'#modifier',

    data: {
        stats: [
            {name: 'Stat primaire', multiplier: '1'},
            {name: 'Critique', multiplier: '0.54'},
            {name: 'Hâte', multiplier: '0.46'},
            {name: 'Maitrise', multiplier: '0.62'},
            {name: 'Polyvalence', multiplier: '0.53'}
        ]
    }
});