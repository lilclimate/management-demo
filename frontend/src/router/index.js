import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import UserList from '../components/UserList.vue';
import UploadImage from '../components/UploadImage.vue';
import UploadFile from '../components/UploadFile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: 'users', component: UserList },
        { path: 'upload-image', component: UploadImage },
        { path: 'upload-file', component: UploadFile },
      ],
    },
  ],
}); 