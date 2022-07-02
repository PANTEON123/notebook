var vm = new Vue({
    el: '#space',
    data: {
        textHeader: 'List of my tasks or to-dos',
        taskas: [
            {message:'Покормить кота', mode: false},
        ],
        connection: '',
        styleObject: {
            textDecorationLine: 'line-through',
        },
    },
    methods: {
        addTask() {
            this.taskas.push({ message: this.connection, mode: false, del:false });
            this.connection = '';
        },
        removeElement: function(index) {
            this.taskas.splice(index, 1)
        }
    }
});