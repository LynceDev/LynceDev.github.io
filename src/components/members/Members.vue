<template>
  <div id="members">
    <div class="container">
      <h2 class="text-center pt-3 pb-3">
        Nossa equipe
      </h2>
      <div class="row">
        <div
          v-for="member in members"
          :key="member.id"
          class="col-12 col-md-4 col-lg-3 text-center">
          <div class="card">
            <b-img
              fluid
              :src="member.photo"
              class="mb-3 px-3 pt-3"/>
            <h3>
              {{ member.name }}
            </h3>
            <h4 class="text-muted text-capitalize">
              {{ member.title }}
            </h4>
            <ul class="list-inline">
              <a :href="generateGithubLink(member)">
                <li class="list-inline-item h3">
                  <span class="fab fa-github"/>
                </li>
              </a>
              <a :href="generateGitlabLink(member)">
                <li class="list-inline-item h3">
                  <span class="fab fa-gitlab"/>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bImg from 'bootstrap-vue/es/components/image/img'

export default {
  components: {
    bImg
  },

  data () {
    return {
      members: [
        {
          name: 'André de Sousa',
          title: 'desenvolvedor front-end',
          githubUser: 'andre-filho',
          gitlabUser: 'andre-filho',
          photo: 'https://avatars3.githubusercontent.com/u/15203968?s=460&v=4'
        },
        {
          name: '',
          title: '',
          githubUser: '',
          gitlabUser: '',
          photo: ''
        },
        {
          name: '',
          title: '',
          githubUser: '',
          gitlabUser: '',
          photo: ''
        },
        {
          name: '',
          title: '',
          githubUser: '',
          gitlabUser: '',
          photo: ''
        }
      ]
    }
  },

  methods: {
    generateGithubLink (member) {
      return 'https://github.com/' + member.githubUser
    },

    generateGitlabLink (member) {
      return 'https://gitlab.com/' + member.githubUser
    },


  }

}
</script>

<style lang="scss" scoped>
  div#members {
    padding-top: 3em!important;
    padding-bottom: 3em!important;
  }

  h4 {
    word-break: keep-all;
  }

  .fa-github, .fa-gitlab {
    color: #999;
    transition: color .3s ease-in-out;
  }

  .fa-github {
    &:hover {
      color: #111;
    }
  }

  .fa-gitlab {
    &:hover {
      color: #e28000;
    }
  }
</style>
