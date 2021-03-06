/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';

const SimpleLayout = () => import('@/components/Layout/SimpleLayout');
const FullLayout = () => import('@/components/Layout/FullLayout');
const SignIn = () => import('@/components/Auth/Signin');
const SignUp = () => import('@/components/Auth/Signup');
const ForgotPassword = () => import('@/components/Auth/ForgotPassword');
const Profile = () => import('@/components/User/Profile');
const Home = () => import('@/components/Stream/Stream');
const SearchTag = () => import('@/components/Tag/SearchTag');
const CreatePost = () => import('@/components/Post/CreatePost');
const CreateDiscussion = () =>
  import('@/components/Post/Discussion/CreateDiscussion');
const CreateBlog = () => import('@/components/Post/Blog/CreateBlog');
const CreateBookReview = () =>
  import('@/components/Post/Review/Book/CreateBook');
const CreateFoodReview = () =>
  import('@/components/Post/Review/Food/CreateFood');
const CreateMovieReview = () =>
  import('@/components/Post/Review/Movie/CreateMovie');
const CreateAudio = () => import('@/components/Post/Audio/CreateAudio');
const EditAudio = () => import('@/components/Post/Audio/EditAudio');
const EditBlog = () => import('@/components/Post/Blog/EditBlog');
const EditDiscussion = () =>
  import('@/components/Post/Discussion/EditDiscussion');
const EditBook = () => import('@/components/Post/Review/Book/EditBook');
const EditMovie = () => import('@/components/Post/Review/Movie/EditMovie');
const EditFood = () => import('@/components/Post/Review/Food/EditFood');
const BlogDetails = () => import('@/components/ChildPage/Blog');
const BookDetails = () => import('@/components/ChildPage/Book');
const MovieDetails = () => import('@/components/ChildPage/Movie');
const FoodDetails = () => import('@/components/ChildPage/Food');
const SongDetails = () => import('@/components/ChildPage/Song');
const PodcastDetails = () => import('@/components/ChildPage/Podcast');
const DiscussionDetails = () => import('@/components/ChildPage/Discussion');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stream',
    name: 'Stream',
    component: Home,
  },
  {
    path: '/blogs/:id',
    name: 'blogDetails',
    component: BlogDetails,
  },
  {
    path: '/users/profile/:username',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/bookReviews/:id',
    name: 'bookDetails',
    component: BookDetails,
  },
  {
    path: '/movieReviews/:id',
    name: 'movieDetails',
    component: MovieDetails,
  },
  {
    path: '/foodReviews/:id',
    name: 'foodDetails',
    component: FoodDetails,
  },
  {
    path: '/songs/:id',
    name: 'songDetails',
    component: SongDetails,
  },
  {
    path: '/podcasts/:id',
    name: 'podcastDetails',
    component: PodcastDetails,
  },
  {
    path: '/discussions/:id',
    name: 'discussionDetails',
    component: DiscussionDetails,
  },
  {
    path: '/',
    component: FullLayout,
    children: [
      {
        path: 'posts/tags',
        name: 'Tag',
        component: SearchTag,
      },
    ],
  },
  {
    path: '/',
    component: SimpleLayout,
    children: [
      {
        path: 'signin',
        name: 'Login',
        component: SignIn,
      },
      {
        path: 'signup',
        name: 'Register',
        component: SignUp,
      },
      {
        path: 'forgotPassword',
        name: 'ResetPassword',
        component: ForgotPassword,
      },
    ],
  },
  {
    path: '/',
    component: FullLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'writePost',
        component: CreatePost,
      },
      {
        path: 'writePost/discussion',
        component: CreateDiscussion,
      },
      {
        path: 'writePost/blog',
        component: CreateBlog,
      },
      {
        path: 'writePost/bookReview',
        component: CreateBookReview,
      },
      {
        path: 'writePost/movieReview',
        component: CreateMovieReview,
      },
      {
        path: 'writePost/foodReview',
        component: CreateFoodReview,
      },
      {
        path: 'writePost/song',
        component: CreateAudio,
      },
      {
        path: 'writePost/podcast',
        component: CreateAudio,
      },
      {
        path: 'edit/podcast/:id',
        name: 'editPodcast',
        component: EditAudio,
      },
      {
        path: 'edit/song/:id',
        name: 'editSong',
        component: EditAudio,
      },
      {
        path: 'edit/discussion/:id',
        name: 'editDiscussion',
        component: EditDiscussion,
      },
      {
        path: 'edit/blog/:id',
        name: 'editBlog',
        component: EditBlog,
      },
      {
        path: 'edit/book/:id',
        name: 'editBook',
        component: EditBook,
      },
      {
        path: 'edit/movie/:id',
        name: 'editMovie',
        component: EditMovie,
      },
      {
        path: 'edit/food/:id',
        name: 'editFood',
        component: EditFood,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
