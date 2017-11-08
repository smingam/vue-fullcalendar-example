<template>
    <div id="app">
        <button @click="refreshEvents">Refresh</button>
        <button v-if="selected._id" @click="removeEvent">Remove</button>
        <pre>{{ selected }}</pre>
        <full-calendar ref="calendar" :events="eventsFromStore" @event-selected="eventSelected" @event-created="eventCreated" :config="config"></full-calendar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
    name: 'app',
    data () {
        return {
            config: {
                firstDay: 1,
                eventClick: (event) => {
                    this.selected = event
                }
            },
            selected: {},
            aDate: moment()
        }
    },

    methods: {
        refreshEvents () {
            this.$refs.calendar.$emit('refetch-events')
        },
        removeEvent () {
            this.$refs.calendar.$emit('remove-event', this.selected)
            this.selected = {}
        },
        eventSelected (event) {
            this.selected = event
        },
        eventCreated (...test) {
            console.log(test)
        }
    },
    computed: {
        ...mapGetters({    // from events.js getters
            eventsFromStore: 'events'
        }),
        eventSources () {
            const self = this
            return [
                {
                    events (start, end, timezone, callback) {
                        setTimeout(() => {
                            callback(self.events.filter(() => Math.random() > 0.5))
                        }, 1000)
                    }
                }
            ]
        }
    }
}
</script>

<style>
@import "~fullcalendar/dist/fullcalendar.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
