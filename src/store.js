import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    events: [
        {
            id: 1,
            title: 'event1',
            start: moment().hours(12).minutes(0)
        },
        {
            id: 2,
            title: 'EVENNT2',
            start: moment().add(-1, 'days'),
            end: moment().add(1, 'days'),
            allDay: true
        },
        {
            id: 3,
            title: 'event3',
            start: moment().add(2, 'days'),
            end: moment().add(2, 'days').add(6, 'hours'),
            allDay: false
        }
    ]
}

// getters
const getters = {
    events: (state) => state.events
}

// mutations
const mutations = {

}

export default new Vuex.Store({
    getters,
    state,
    mutations,
    strict: debug
})
