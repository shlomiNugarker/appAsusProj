export default {
  props: ["folderType"],
  template: `
  <div>
    
    <section class="filter-container">

      <input type="text" placeholder="search mail" @input="setFilter" v-model="filterBy.txt">
   
      <div class="sort-container">

        <select @change="setFilter" v-model="filterBy.isRead">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
          <option value="all">All</option>
        </select>

        <button @click="setSortDate">Sort By Date</button>

        <button @click="setSortTxt">Sort By Title</button>
      </div>

      <p> {{ this.folderType }} :</p>
     

    </section>    

  </div>
  `,
  data() {
    return {
      isRead: false,
      filterBy: {
        isRead: 'all',
        txt: '',
        sortAt: true,
        sortTxt: false, 
        sortType: 'date',


      }
    }
  },
  methods: {
    setFilter(){
      this.$emit('filtered',{ ...this.filterBy })
    },
    setSortDate(){
      this.filterBy.sortType = 'date'
      this.filterBy.sortAt = !this.filterBy.sortAt
      this.$emit('filtered',{ ...this.filterBy })
    },
    setSortTxt(){
      this.filterBy.sortType = 'subject'
      this.filterBy.sortTxt = !this.filterBy.sortTxt
      this.$emit('filtered',{ ...this.filterBy })
    },
    filterRead(){
      this.filterBy.isRead = !this.filterBy.isRead
      this.$emit('filtered',{ ...this.filterBy } )
    },
  },
  computed: {
    readOrNot(){
      if(!this.filterBy.isRead) return 'Read'
      return 'Unread'
    }
  }
}