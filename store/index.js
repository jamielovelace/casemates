export const state = () => ({
  studios: [],
  pages: [],
  siteInfo: []
})

export const mutations = {
  SET_STUDIOS(state, data) {
    state.studios = data
  },
  SET_PAGES(state, data) {
    state.pages = data
  },
  SET_INFO(state, data) {
    state.siteInfo = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo')
    await dispatch('getStudios')
    await dispatch('getPages')
  },
  async getStudios({ commit }) {
    const context = await require.context(
      '~/assets/content/studios/',
      false,
      /\.json$/
    )

    const studios = await context.keys().map((key) => ({
      ...context(key),
      _path: `
        /studios/${key.replace('.json', '').replace('./', '')}
      `
    }))

    commit('SET_STUDIOS', studios)
  },
  async getPages({ commit }) {
    const context = await require.context(
      '~/assets/content/pages/',
      false,
      /\.json$/
    )

    const pages = await context.keys().map((key) => ({
      ...context(key),
      _path: `
        /page/${key.replace('.json', '').replace('./', '')}
      `
    }))

    commit('SET_PAGES', pages)
  },
  getSiteInfo({ commit }) {
    const info = require('~/assets/content/setup/info.json')
    commit('SET_INFO', info)
  }
}
