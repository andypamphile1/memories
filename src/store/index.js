import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      handleButtonClick: '',
      searchKeyword: '',
      memories: [
        {
          id: 'm1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Burundian_performers_with_drums.jpg/640px-Burundian_performers_with_drums.jpg',
          title: 'Abatimbo',
          description: 'Abatimbo are people that play drums in my Motherland. The Burundi.',
        },
        {
          id: 'm2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Majestic_Impala.jpg/640px-Majestic_Impala.jpg',
          title: 'Impala',
          description: 'The impala is a medium-sized, slender-bodied antelope. That can be found in many other species, in the beautiful country of Uganda',
        }, 
        {
          id: 'm3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ring_of_Life_-_Fushun.jpg/1280px-Ring_of_Life_-_Fushun.jpg',
          title: 'Ring of Life',
          description: 'Ring of Life is in Shenyang, the capital and largest city of the northeast Liaoning Province of China',
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    },
    deleteMemory(state, memoryId) {
      const index = state.memories.findIndex(memory => memory.id === memoryId);
      if (index !== -1) {
        state.memories.splice(index, 1);
      }
    }, 
    
  updateSearchKeyword(state, keyword) {
    state.searchKeyword = keyword;
  },
},
  
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    },
    deleteMemory(context, memoryId) {
      context.commit('deleteMemory', memoryId);
    },
  }, 
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;

