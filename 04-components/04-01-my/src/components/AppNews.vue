<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <app-button @action="open">
            {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
        </app-button>
        <app-button 
            color="danger"
            v-if="wasRead" 
            @click="$emit('unmark',id)">
            Отметить непрочитанной
        </app-button>
        <div v-if="isNewsOpen">
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magni atque minus debitis unde, quas, facilis dolorum accusamus, officiis iste quasi! Magnam ut quam repellat quibusdam? Optio modi illum laboriosam.</p>
            <app-button 
                v-if="!wasRead" 
                color="primary" 
                @click="mark">
                Прочесть новость
            </app-button>

            <app-news-list></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';

export default {
    // props: ['title'],
    
    props: {
        title: {
            type:String,
            required: true
        },
        id: {
            type:Number,
            required: true
        },
        isOpen: {
            type:Boolean,
            required: false,
            default: false,
            validator(value) {
                return value === true || value === false
            }
        },
        wasRead: Boolean
    },
    // emits: ['open-news'],
    emits: {
        'open-news': null,
        'read-news'(id) {
            if (id) {
                return true
            }
            console.warn('Нет параметра объекта');
            return false
        },
        unmark: null
    },
    // emits: {
    //     'open-news'(num) {
    //         if (num) {
    //             return true
    //         }
    //         console.warn('No data in open-news emit')
    //         return false
    //     }
    // },
    data() {
        return {
            isNewsOpen: this.isOpen
        }
        },
    methods: {
        open() {
            this.isNewsOpen = !this.isNewsOpen
            if (this.isNewsOpen) {
                this.$emit('open-news')//, 42)
            }
        },
        mark() {
            this.isNewsOpen = false
            this.$emit('read-news', this.id)
        },
        // unmark() {
        //     this.$emit('unmark', this.id)
        // }
    },
    components: {
        AppButton,
        AppNewsList

    }
    }
</script>