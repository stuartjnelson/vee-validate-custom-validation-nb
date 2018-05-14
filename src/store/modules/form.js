const state = {
    players: [
        {
            id: 0,
            firstName: 'Simon',
            secondName: 'Neil',
            inital: 'SN'
        },
        {
            id: 1,
            firstName: 'Justin',
            secondName: 'Vernon',
            inital: 'BI'
        }
    ]
}

const getters = {
    getPlayers: state => state.players,
}

const mutations = {
    addNewPlayer: (state, payload) => {
        state.players.push(payload)
    }
}

const actions = {
    addNewPlayer: ({ commit }, payload) => {
        commit('addNewPlayer', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
