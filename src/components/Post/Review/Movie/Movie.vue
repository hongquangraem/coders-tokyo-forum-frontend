<template>
  <v-hover v-slot:default="{ hover }" style="transition: 0.3s">
    <v-card class="mx-auto mt-6 movie-card" :elevation="hover ? 20 : 3">
      <v-row style="margin-right: 0">
        <v-col class="pt-0 pr-0" cols="12" sm="12" md="12" lg="7" xl="8">
          <v-img
            :src="cover.secureURL"
            height="360px"
            style="cursor: pointer"
            class="cover-movie"
            @click="linkToBlog"
          />
        </v-col>
        <v-col
          class="pa-0"
          cols="12"
          sm="12"
          md="12"
          lg="5"
          xl="4"
          style="position: relative"
        >
          <div class="d-md-none d-lg-flex">
            <v-container class="ml-1 movie-detail">
              <v-card-text class="pb-2 pt-2 pl-0 pr-1">
                <p class="title text--primary mb-0 pt-1">{{ topic }}</p>
                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p style="width: 63px" class="key mb-0 mr-3">
                    {{ $t('Director') }}:
                  </p>
                  <span />
                  <p class="mb-0 mr-3">
                    <span
                      v-for="(director, i) in slicedDirectors"
                      :key="director._id"
                      class="value mb-0"
                    >
                      {{ director.name
                      }}{{ isAddComma(i, slicedDirectors.length) }}
                    </span>
                  </p>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p style="width: 110px" class="key mb-0 mr-3">
                    {{ $t('Actors') }}:
                  </p>
                  <span />
                  <p class="mb-0 mr-3">
                    <span
                      v-for="(actor, i) in slicedActors"
                      :key="actor._id"
                      class="value mb-0"
                    >
                      {{ actor.name }}{{ isAddComma(i, slicedActors.length) }}
                    </span>
                  </p>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p style="width: 62px" class="key mb-0 mr-3">IMDb:</p>
                  <v-chip
                    label
                    text-color="black"
                    outlined
                    small
                    style="border: 1px solid #FBC02D !important; background-color: #fdd835 !important"
                  >
                    {{ movie.IMDb }}
                  </v-chip>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p style="width: 62px" class="key mb-0 mr-3">
                    {{ $t('Nation') }}:
                  </p>
                  <p class="value mb-0">{{ movie.country }}</p>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p class="key mb-0 mr-3">Link:</p>
                  <v-chip
                    label
                    text-color="black"
                    outlined
                    small
                    style="border: 1px solid #90d2a3 !important; background-color: #C5E1A5 !important"
                  >
                    <a target="_blank" :href="movie.link">{{ movie.link }}</a>
                  </v-chip>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p class="key mb-0 mr-3">{{ $t('Release Date') }}:</p>
                  <v-chip
                    label
                    text-color="black"
                    outlined
                    small
                    :style="calMovieYearColor"
                  >
                    {{ movie.releaseDate }}
                  </v-chip>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p class="key mb-0 mr-3">{{ $t('Time') }}:</p>
                  <p class="value mb-0">{{ movie.time }} {{ $t('minutes') }}</p>
                </v-container>

                <v-container class="d-flex pl-1 pb-0 pr-0">
                  <p class="key mb-0 mr-4">{{ $t('Stars') }}:</p>
                  <v-icon
                    v-for="(start, i) in movie.stars"
                    :key="i"
                    size="20"
                    :color="isStar(i + 1)"
                    style="width: 25px"
                  >
                    start
                  </v-icon>
                </v-container>
              </v-card-text>
            </v-container>
          </div>
          <div class="d-none d-md-flex d-lg-none">
            <v-container class="ml-1 movie-detail pt-1 pb-0 pr-0">
              <v-card-text class="pb-6 pt-0 d-flex justify-space-around">
                <div>
                  <v-container class="d-flex pl-1 pb-0 pr-0 pt-2">
                    <p class="key mb-0 mr-3">Status:</p>
                    <p class="value mb-0" :style="calMovieStatusColor">
                      {{ movie.status }}
                    </p>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0 pr-0">
                    <p class="key mb-0 mr-3">IMDb:</p>
                    <v-chip
                      label
                      text-color="black"
                      outlined
                      small
                      style="border: 1px solid #FBC02D !important; background-color: #fdd835 !important"
                    >
                      {{ movie.IMDb }}
                    </v-chip>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0 pr-0">
                    <p style="width: 66px" class="key mb-0 mr-3">
                      {{ $t('Director') }}:
                    </p>
                    <span />
                    <p class="mb-0 mr-3">
                      <span
                        v-for="(director, i) in slicedDirectors"
                        :key="director._id"
                        class="value mb-0"
                      >
                        {{ director.name
                        }}{{ isAddComma(i, slicedDirectors.length) }}
                      </span>
                    </p>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0 pr-0">
                    <p style="width: 100px" class="key mb-0 mr-3">
                      {{ $t('Actors') }}:
                    </p>
                    <span />
                    <p class="mb-0 mr-3">
                      <span
                        v-for="(actor, i) in slicedActors"
                        :key="actor._id"
                        class="value mb-0"
                      >
                        {{ actor.name }}{{ isAddComma(i, slicedActors.length) }}
                      </span>
                    </p>
                  </v-container>
                </div>

                <div>
                  <v-container class="d-flex pl-1 pb-0">
                    <p class="key mb-0 mr-3">Year:</p>
                    <v-chip
                      label
                      text-color="black"
                      outlined
                      small
                      :style="calMovieYearColor"
                    >
                      {{ movie.releaseDate }}
                    </v-chip>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0">
                    <p class="key mb-0 mr-3">{{ $t('Release Date') }}:</p>
                    <v-chip
                      label
                      text-color="black"
                      outlined
                      small
                      style="border: 1px solid #90d2a3 !important; background-color: #C5E1A5 !important"
                    >
                      {{ movie.releaseDate }}
                    </v-chip>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0">
                    <p class="key mb-0 mr-3">{{ $t('Time') }}:</p>
                    <p class="value mb-0">
                      {{ movie.time }} {{ $t('minutes') }}
                    </p>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0 pr-0">
                    <p class="key mb-0 mr-3">{{ $t('Nation') }}:</p>
                    <p class="value mb-0">{{ movie.country }}</p>
                  </v-container>

                  <v-container class="d-flex pl-1 pb-0">
                    <p style="width: 60px" class="key mb-0 mr-4">
                      {{ $t('Stars') }}:
                    </p>
                    <v-icon
                      v-for="(start, i) in movie.stars"
                      :key="i"
                      size="20"
                      :color="isStar(i + 1)"
                      style="width: 25px"
                    >
                      start
                    </v-icon>
                  </v-container>
                </div>
              </v-card-text>
              <v-divider />
            </v-container>
          </div>
        </v-col>
      </v-row>

      <v-list-item three-line style="padding: 0 25px 0 20px;">
        <v-list-item-content class="pr-10 pt-lg-0 pb-lg-0">
          <a
            style="width: 80%;overflow: hidden;text-decoration: none; color: rgba(0, 0, 0, 0.87) !important"
            @click="linkToBlog"
          >
            <v-list-item-title class="headline movie-title mb-0 mt-3">
              {{ topic }}
            </v-list-item-title>
          </a>
          <p class="description mb-0 pt-2">{{ description || content }}</p>
          <span style="font-size: 0.775rem;" class="pt-1" />
          <div class="d-flex justify-space-between" style="height: 20px">
            <span style="font-size: 0.775rem;" class="pt-1">
              <a style=" text-decoration: none" @click="linkToBlog">
                {{ $t('Read more') }}...
              </a>
            </span>
            <read-time
              class="pt-0"
              :text="content"
              :customize="'font-size: 0.775rem'"
            />
          </div>
        </v-list-item-content>
        <user-avatar
          :src="author.avatar.secureURL"
          :username="author.username"
          style="padding-bottom: 7px;"
        />
      </v-list-item>

      <v-card-actions style="padding: 2px 25px 0 6px;" class="pb-1 pb-lg-2">
        <release-time-card :createdAt="createdAt" />
        <v-spacer />
        <v-container>
          <v-row>
            <v-col
              class="pa-lg-0"
              cols="5"
              sm="5"
              md="4"
              offset-md="2"
              lg="3"
              offset-lg="5"
              xl="2"
              offset-xl="5"
            >
              <like-btn
                @handleLikePost="onClickLikePost"
                @handleUnlikePost="onClickUnlikePost"
                :isUserLiked="isUserLiked"
                :likes="likes.length"
                :postId="_id"
              />
            </v-col>
            <v-col class="pa-lg-0">
              <comment-btn
                :type="type"
                :postId="_id"
                :comments="totalComments"
              />
            </v-col>
          </v-row>
        </v-container>
        <tag
          v-if="tags.length"
          :tagName="tags[0].tagName"
          :postType="'movie'"
        />
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import LikeBtn from '@/components/Shared/LikeButton';
import CommentBtn from '@/components/Shared/CommentButton';
import Tag from '@/components/Shared/Tag';
import UserAvatar from '@/components/Shared/UserAvatar';
import ReleaseTimeCard from '@/components/Shared/ReleaseTimeCard';
import { movieDescription } from '@/mixins/movieDescription';
import ReadTime from '@/components/Shared/readTime';
import { ROUTES } from '@/mixins/routes';
import { toggleLike } from '@/mixins/toggleLike';

export default {
  mixins: [movieDescription, toggleLike],
  props: {
    _id: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    authors: {
      type: Array,
      default: () => [],
    },
    comments: {
      type: Array,
      default: () => [],
    },
    likes: {
      type: Array,
      default: () => [],
    },
    savedBy: {
      type: Array,
      default: () => [],
    },
    author: {
      type: Object,
      default: () => ({}),
    },
    topic: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: '',
    },
    updatedAt: {
      type: String,
      required: true,
    },
    metadata: {
      type: Object,
      default: () => ({}),
    },
    movie: {
      type: Object,
      default: () => ({}),
    },
    cover: {
      type: Object,
      required: true,
    },
  },
  components: {
    Tag,
    LikeBtn,
    ReadTime,
    ReleaseTimeCard,
    CommentBtn,
    UserAvatar,
  },
  data() {
    return {
      director: {},
      blogLink: ROUTES.MOVIE_REVIEWS(this._id),
    };
  },
  methods: {
    linkToBlog() {
      this.$router.push({ path: this.blogLink });
    },
  },
  computed: {
    totalComments() {
      let counter = 0;
      counter += this.comments.length;
      this.comments.map(comment => {
        counter += comment.childComments.length;
        return counter;
      });
      return counter;
    },
  },
};
</script>

<style scoped lang="scss">
.value {
  color: #000;
}
.movie-title {
  text-align: left;
  white-space: initial;
  line-height: 1.25;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

.title-link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}

.movie-card {
  border-radius: 7px !important;
}

.cover-movie {
  border-top-left-radius: 7px !important;
}
.like-icon,
.comment-icon {
  position: relative;
}

.like-icon-content {
  position: absolute !important;
  top: 10px;
  left: 22px;
  font-size: 12px;
}

.comment-icon-content {
  position: absolute !important;
  top: 10px;
  left: 22px;
  font-size: 12px;
}

.description {
  overflow: hidden;
  position: relative;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  max-height: 1.4;
  text-align: justify;
  white-space: initial;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>
