<template lang="html">
    <form class="form" @submit.prevent="submitNewPlayer()">
            <!-- First name -->
            <label for="firstName" class="form__label">First Name</label>
            <input
                id="firstName" class="form__input" type="text" name="firstName" placeholder="Ray"
                v-model.trim="player.firstName"
                :class="{'-error': errors.has('firstName')}" v-validate="'required|alpha'"
            >
            <div class="form__input-hint" v-show="errors.has('firstName')">{{ errors.first('firstName') }}</div>


            <!-- Second name -->
            <label for="secondName" class="form__label">Second Name</label>
            <input
                id="secondName" class="form__input" type="text" name="secondName" placeholder="Lewis"
                v-model.trim="player.secondName"
                :class="{'-error': errors.has('secondName')}" v-validate="'required|alpha'"
            >
            <div class="form__input-hint" v-show="errors.has('secondName')">{{ errors.first('secondName') }}</div>


            <!-- Inital -->
            <label for="inital" class="form__label">Unique Inital</label>
            <input
                id="inital" class="form__input" type="text" name="inital" placeholder="RL"
                v-model="player.inital"
                :class="{'-error': errors.has('inital')}" v-validate.disable="`required|alpha|playerInitalCheck: ${getInitals}`"
            >
            <div class="form__input-hint" v-show="errors.has('inital')">{{ errors.first('inital') }}</div>

            <input class="btn" type="submit" value="Submit" name="submit">
        </form>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        data() {
            return {
                player: {},
                initalPlayerObject: {
                    id: '',
                    firstName: '',
                    secondName: '',
                    inital: ''
                }
            }
        },
        computed: {
            ...mapGetters(['getPlayers']),
            createInital() {
                return `${this.firstName.charAt(0)}${this.secondName.charAt(0)}`
            },
            firstName() {
                return this.player.firstName
            },
            secondName() {
                return this.player.secondName
            },
            getInitals() {
                return this.getPlayers
                    .filter(player => player.id !== this.player.id)
                    .map(player => player.inital)
            }
        },
        watch: {
            firstName() {
                this.player.inital = this.createInital
            },
            secondName() {
                this.player.inital = this.createInital
            }
        },
        methods: {
            ...mapMutations(['addNewPlayer']),
            ...mapActions(['addNewPlayer']),
            submitNewPlayer(event) {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // eslint-disable-next-line
                        alert('Form Submitted!')

                        // 1. Copying player data object
                        const playerCopy = Object.assign({}, this.player)

                        // 2. Creating player ID
                        playerCopy.id = this.player.id.length
                            ? this.player.id
                            : this.getPlayers.length

                        // 3. Sending off new player action
                        this.addNewPlayer(playerCopy)

                        // 4. Going to homepage
                        this.$router.push({ name: 'home' })
                    } else {
                        alert('Correct them errors!')
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
// ==========================================================================
//    VARIABLES
// ==========================================================================
$spacing-unit: 40px;
$quarter-spacing-unit: $spacing-unit/4;
$half-spacing-unit: $spacing-unit/2;
$double-spacing-unit: $spacing-unit*2;

$hint-color:    #677982;
$focus-color:   #F4D921;
$acitve-color:  #285A7C;
$checked-color: #3D8BBC;
$error-color:   #f00;
$black:         #464646;





// ==========================================================================
//    MIXIN
// ==========================================================================
@mixin control-input-boxshadow($firstShadowColor: #fff, $secondShadowColor: false) {
    @if($secondShadowColor != false) {
        box-shadow: 0 0 0 0.075rem $firstShadowColor, 0 0 0 0.2rem $secondShadowColor;
    } @else {
        box-shadow: 0 0 0 0.075rem $firstShadowColor;
    }
}


*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-family: Arial, sans-serif;
    font-size: 18px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10vh auto 0;
    max-width: 600px;
}

.form__input {
    border: solid 2px $black;
    display: block;
    font-size: 0.9rem;
    line-height: 1.25;
    padding: 8px $quarter-spacing-unit;
    width: 100%;

    &:not(:last-of-type) {
        margin-bottom: $spacing-unit;
    }

    &:focus {
        outline: solid 3px $focus-color;
        outline-offset: 0;
    }

    &.-error { border: solid 2px $error-color; }
}

.form__label {
    display: block;
    font-weight: bold;    
    margin-bottom: $quarter-spacing-unit;
}

.form__input-hint {
    color: $hint-color;
    display: block;
    margin-bottom: $half-spacing-unit;
    margin-top: -($half-spacing-unit + $quarter-spacing-unit);


    // Fieldset modifcation
    .form__fieldset & {
        bottom: -($spacing-unit);
        left: 0;
        margin-bottom: 0;
        position: absolute;
    }
}

.btn {
    background-color: $checked-color;
    border: 3px solid $checked-color;
    color: #fff;
    font-size: 100%;
    font-weight: bold;
    line-height: 1;
    padding: 0.5rem 1.25rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    z-index: 1;

    &:focus {
        background-color: transparent;
        color: $black;
        outline: none;
    }
}

@media (min-width: 400px) {
    .form__input {
        min-width: 320px;
        width: auto;
    }
}

@media (min-width: 768px) {
    .btn {
        &:hover {
            background-color: transparent;
            color: $black;
        }
    }
}
</style>
