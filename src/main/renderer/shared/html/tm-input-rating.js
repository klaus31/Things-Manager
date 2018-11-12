import {Rating} from "../data/model/Rating";

Vue.component('star-rating', VueStarRating.default);

Vue.component('tm-input-rating', {
  props: ['content', 'actions'],
  data: function () {
    return {
      rating: new Rating(this.content),
      maxRating: Rating.MAX
    }
  },
  methods: {
    onDone: function () {
      if (this.actions && this.actions.onDone) {
        this.actions.onDone(this.rating.value);
      }
    }
  },
  template: '<p>' +
    '<star-rating v-model="rating.value" :star-size="20" :max-rating="maxRating"></star-rating>' +
    '<tm-button icon="ok" @click="onDone" v-if="actions.onDone"></tm-button>' +
    '</p>',
  watch: {
    rating: {
      handler: function () {
        if (this.actions) {
          if (this.actions.onChange) this.actions.onChange(this.rating.value);
          if (this.actions.onDone) this.actions.onDone(this.rating.value);
        }
      },
      deep: true
    }
  }
});
