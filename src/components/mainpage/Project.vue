<template>
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        :width="siderWidth"
        collapsible
        :theme="siderTheme"
        :style="{ position: 'relative' }"
      >
        <div class="logo" />
        <span> Project Name</span>
        <span> Project type</span>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :theme="menuTheme">
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <span>PLANNING</span>
              </span>
            </template>
            <a-menu-item key="3">Backlog</a-menu-item>
            <a-menu-item key="4">Board</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <SettingOutlined />
            <span>Project setting</span>
          </a-menu-item>
        </a-menu>
        <div class="resizer" @mousedown="startResizing"></div>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: siderWidth + 'px' }">
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            Bill is a cat.
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { SettingOutlined } from '@ant-design/icons-vue';
  
  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(['1']);
  const siderTheme = ref<'dark' | 'light'>('light');
  const menuTheme = ref<'dark' | 'light'>('light');
  const siderWidth = ref<number>(200);
  
  let isResizing = false;
  
  const startResizing = (event: MouseEvent) => {
    isResizing = true;
    document.addEventListener('mousemove', resizeSider);
    document.addEventListener('mouseup', stopResizing);
  };
  
  const resizeSider = (event: MouseEvent) => {
    if (isResizing) {
      siderWidth.value = Math.max(event.clientX, 100); // Ensure sider has a minimum width of 100px
    }
  };
  
  const stopResizing = () => {
    isResizing = false;
    document.removeEventListener('mousemove', resizeSider);
    document.removeEventListener('mouseup', stopResizing);
  };
  
  onMounted(() => {
    document.addEventListener('mouseup', stopResizing);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('mouseup', stopResizing);
  });
  </script>
  
  <style scoped>
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout-background {
    background: #fff;
  }
  
  .resizer {
    width: 5px;
    cursor: ew-resize;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
  </style>
  