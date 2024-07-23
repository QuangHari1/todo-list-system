<template>
    <div class="mt-20 px-10 py-0 ml-10">
        <div class="h-[40px] flex justify-between">
            <span class="font-ui text-2xl font-semibold opacity-80">Projects</span>
            <div class="flex">
                <button class="h-[36px] bg-blue-600 text-white hover:bg-blue-700 px-3 mr-1 rounded">Create project</button>
                <button class="h-[36px] bg-gray-100 text-black hover:bg-gray-300 px-3 rounded">Template</button>
            </div>
        </div>
        <div class="mt-6">
            <div class="relative inline-block mr-6">
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search projects"
                    class="custom-input w-[224px] min-h-[40px] border border-gray-500 rounded py-3 font-light pl-2 pr-10 placeholder-gray-400 hover:border-blue-600 "
                />
                <i v-if="searchQuery"
                   @click="clearSearch"
                   class="fa-solid fa-x absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"></i>
                <i v-else
                   class="fa-solid fa-magnifying-glass absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"></i>
            </div>
            <div class="relative inline-block">
                <input
                    type="text"
                    @focus="toggleDropdown(true)"
                    @blur="toggleDropdown(false)"
                    placeholder="Filter by product"
                    class=" custom-input w-[200px] min-h-[40px] border border-gray-500 rounded py-3 font-light pl-2 pr-10 placeholder-gray-400"
                />
                <i class="fa-solid fa-chevron-down absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"></i>

                <!-- Dropdown Menu -->
                <div v-show="isDropdownVisible" class="absolute z-10 mt-2 w-[200px] bg-white border border-gray-300 rounded shadow-lg">
                    <div class=" text-sm font-normal font-apple">
                        <label class="items-center block mt-2 py-2 border-l-4 border-white hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 transition-all">
                            <input type="checkbox" v-model="selectedFilters" value="business projects" class="ml-3"/>
                            <span class="ml-2 text-gray-700">Business Projects</span>
                        </label>
                        <label class="block mb-2 py-2 border-l-4 border-white hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 transition-all">
                            <input type="checkbox" v-model="selectedFilters" value="software projects" class="ml-3"/>
                            <span class="ml-2 text-gray-700">Software Projects</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import "@fortawesome/fontawesome-free/css/all.css";

export default {
    setup() {
        const searchQuery = ref('');
        const isDropdownVisible = ref(false);
        const selectedFilters = ref<string[]>([]);

        const clearSearch = () => {
            searchQuery.value = '';
        };

        const toggleDropdown = (show: boolean) => {
            isDropdownVisible.value = show;
        };

        return { searchQuery, clearSearch, isDropdownVisible, toggleDropdown, selectedFilters };
    }
};
</script>

<style scoped>
.custom-input:focus {
    border-color: #3b82f6; /* border-blue-600 */
    outline: none;
    border-width: 1px;
    box-shadow: inset 0 0 0 1px #2563eb;
}
</style>
