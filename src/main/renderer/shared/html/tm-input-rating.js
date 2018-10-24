import Vue from "../../../../node_modules/vue/dist/vue.esm.browser.js";
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
    onChange: function () {
      console.info(this.rating.value);
      // if (this.actions && this.actions.onChange) {
      //   this.actions.onChange(this.rating.toString());
      // }
    },
    onDone: function () {
      // if (this.actions && this.actions.onDone) {
      //   this.actions.onDone(this.rating.toString());
      // }
    }
  },
  template: '<star-rating v-model="rating.value" :star-size="20" :max-rating="maxRating"></star-rating>',
  watch: {
    rating: {
      handler: function () {
        if (this.actions && this.actions.onChange) {
          this.actions.onChange(this.rating.value);
        }
      },
      deep: true
    }
  }
});
