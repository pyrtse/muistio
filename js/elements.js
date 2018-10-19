Vue.component('own-element',{
  props:['element', 'index', 'removeitem'],
  template:
  
  `<li class="center collection-item">{{element}}
  <button class="waves-effect waves-light btn" v-on:click='removeitem(index)'>Remove</button></li>`
});



new Vue({
  el: '.js-instance',
  name: 'vue-instance',
  
  data() {
    return {
      
      elements: [
        
      ],
	  name: '',
	  error: '',
    };
  },
  
  mounted() {
     if (localStorage.elements) {
      var temp = localStorage.elements.split(',');
      console.log(temp);
      this.elements = temp;
    }
  },
  watch: {
    elements(newElements) {
      localStorage.elements = newElements;
    }
  },
  
  methods: {
    removeitem(index) {
      this.elements.splice(index, 1);
    },
    
    add() {
      if (this.name === '') {
        return;
      }
	  var name = this.name;
	  var format = /^[a-zA-Z0-9]+$/;
	  if (this.name.length<20 && format.test(this.name)) {
		  this.elements.push(this.name);
		  this.name = '';
		  this.error == ''
	  } else {
		  this.error = 'Element is not valid'
	  }
    },
  },
});