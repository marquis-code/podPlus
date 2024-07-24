<template>
  <div>
    <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true" v-if="isOpen">
      <div class="fixed inset-0 bg-gray-900/80"></div>

      <div class="fixed inset-0 flex">
        <div class="relative mr-16 flex w-full max-w-xs flex-1">
          <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
              <span class="sr-only">Close sidebar</span>
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-12 w-auto" src="@/assets/img/pod-plus-logo.png" alt="Your Company">
            </div>
            <nav class="flex flex-1 flex-col">
              <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" class="-mx-2 space-y-1">
                    <li>
                      <NuxtLink to="/dashboard" @click.prevent="isOpen = false"
                        :class="isActive('/dashboard') ? 'bg-gray-50 text-indigo-600' : ''"
                        class="group flex gap-x-3 rounded-md p-2 py-3 text-base leading-6 font-semibold">
                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Dashboard
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/dashboard/ads" @click.prevent="isOpen = false"
                      :class="isActive('/dashboard/ads') ? 'bg-[#0ba9b9] text-white' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'"
                        class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 py-3 text-base leading-6 font-semibold">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.667 15L17.5003 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M2.5 15H4.16667" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path
                            d="M6.25033 17.0833C7.40092 17.0833 8.33366 16.1506 8.33366 15C8.33366 13.8494 7.40092 12.9167 6.25033 12.9167C5.09973 12.9167 4.16699 13.8494 4.16699 15C4.16699 16.1506 5.09973 17.0833 6.25033 17.0833Z"
                            stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.667 10H17.5003" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M2.5 10H8.33333" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path
                            d="M13.7503 12.0833C14.9009 12.0833 15.8337 11.1506 15.8337 9.99999C15.8337 8.8494 14.9009 7.91666 13.7503 7.91666C12.5997 7.91666 11.667 8.8494 11.667 9.99999C11.667 11.1506 12.5997 12.0833 13.7503 12.0833Z"
                            stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.833 5H17.4997" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M2.5 5H3.33333" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path
                            d="M8.75033 7.08332C9.90092 7.08332 10.8337 6.15058 10.8337 4.99999C10.8337 3.8494 9.90092 2.91666 8.75033 2.91666C7.59973 2.91666 6.66699 3.8494 6.66699 4.99999C6.66699 6.15058 7.59973 7.08332 8.75033 7.08332Z"
                            stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Banner Ads
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="mt-auto">
                  <a href="#" @click.prevent="logOut"
                    class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                    <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-12 w-auto" src="@/assets/img/pod-plus-logo.png" alt="Your Company">
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-4">
                <li>
                  <NuxtLink to="/dashboard"
                    :class="isActive('/dashboard') ? 'bg-gray-50 text-indigo-600' : ''"
                    class="flex w-full text-gray-700 items-center gap-x-3 no-underline rounded-md px-3 py-2.5 leading-loose">
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Dashboard
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/dashboard/ads"
                  :class="isActive('/dashboard/ads') ? 'bg-[#0ba9b9] text-white' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'"
                    class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 py-3 text-sm leading-6 font-semibold">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.667 15L17.5003 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M2.5 15H4.16667" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M6.25033 17.0833C7.40092 17.0833 8.33366 16.1506 8.33366 15C8.33366 13.8494 7.40092 12.9167 6.25033 12.9167C5.09973 12.9167 4.16699 13.8494 4.16699 15C4.16699 16.1506 5.09973 17.0833 6.25033 17.0833Z"
                        stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.667 10H17.5003" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M2.5 10H8.33333" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M13.7503 12.0833C14.9009 12.0833 15.8337 11.1506 15.8337 9.99999C15.8337 8.8494 14.9009 7.91666 13.7503 7.91666C12.5997 7.91666 11.667 8.8494 11.667 9.99999C11.667 11.1506 12.5997 12.0833 13.7503 12.0833Z"
                        stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.833 5H17.4997" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M2.5 5H3.33333" stroke="#667085" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M8.75033 7.08332C9.90092 7.08332 10.8337 6.15058 10.8337 4.99999C10.8337 3.8494 9.90092 2.91666 8.75033 2.91666C7.59973 2.91666 6.66699 3.8494 6.66699 4.99999C6.66699 6.15058 7.59973 7.08332 8.75033 7.08332Z"
                        stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    Banner Ads
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a href="#" @click.prevent="logOut"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-60">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button @click="isOpen = true" type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

        <CoreDashboardHeader :username="username" />
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">

          <slot />
        </div>
      </main>
      <CoreSearchModal :isOpen="isSearchModalOpen" @update:isOpen="isSearchModalOpen = $event" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { useKeyboardShortcut } from '@/composables/core/useKeyboardShortcut';
import { useLogin } from '@/composables/auth/login'
const { localstorageData, logOut } = useLogin()
const isOpen = ref(false)
const route = useRoute()
const router = useRouter()

const username = computed(() => {
  return Object.keys(localstorageData.user.value).length ? `${localstorageData.user.value.firstname} ${localstorageData.user.value.lastname}` : ''
})

const isSearchModalOpen = ref(false);

useKeyboardShortcut(() => {
  isSearchModalOpen.value = true;
});

definePageMeta({
  middleware: 'auth'
})

const checkOnlineStatus = () => {
  if (navigator.onLine) {
    router.push(router?.options?.history?.state?.current)
  } else {
    router.push('/login')
    useNuxtApp().$toast.success('You are currently offline.', {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  }
}

onMounted(() => {
  // Check online status when the component is mounted
  checkOnlineStatus();

  // Listen for online and offline events
  window.addEventListener('online', checkOnlineStatus);
  window.addEventListener('offline', checkOnlineStatus);
});

onUnmounted(() => {
  // Remove event listeners to prevent memory leaks
  window.removeEventListener('online', checkOnlineStatus);
  window.removeEventListener('offline', checkOnlineStatus);
});

const isActive = (path) => {
  return route.path.startsWith(path);
};
</script>

<style scoped>
.router-link-exact-active {
  background-color: #0ba9b9;
  color: white
}
</style>
