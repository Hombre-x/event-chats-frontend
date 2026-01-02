import { defineStore } from "pinia"
import type { Ref } from "vue"

import { genAnonymousName } from "@@/src/user/info/anonymous-name"

const userStoreSetup = (): { name: Ref<string> } => {
  const name = ref("Anonymoud Giraffe")

  name.value = genAnonymousName()

  return { name }
}

export const useUserStore = defineStore("userInfo", userStoreSetup)
