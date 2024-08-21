<script lang="ts">
  import { onMount } from 'svelte';

  let activeLink = '';

  function setActive(link: string) {
    activeLink = link;
  }

  onMount(() => {
    const path = window.location.pathname;
    if (path === '/inquiries') setActive('inquiries');
    else if (path === '/') setActive('');
    
  });
</script>

<div class="sidebar">
  <div class="sidebar-content">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a href="/" class="nav-link {activeLink === 'home' ? 'active' : ''}" on:click={() => setActive('home')}>
          Participant Dashboard
        </a>
        <hr class="active-hr"/>
      </li>
      <li class="nav-item">
        <a href="/connections" class="nav-link {activeLink === 'connections' ? 'active' : ''}" on:click={() => setActive('connections')}>
          Connections
        </a>
        <hr class="active-hr"/>
      </li>
      <li class="nav-item">
        <a href="/provisioning" class="nav-link {activeLink === 'provisioning' ? 'active' : ''}" on:click={() => setActive('provisioning')}>
          Provisioning
        </a>
        <hr class="active-hr"/>
      </li>
      <li class="nav-item">
        <a href="/search" class="nav-link {activeLink === 'search' ? 'active' : ''}" on:click={() => setActive('search')}>
          Search
        </a>
        <hr class="active-hr"/>
      </li>
      <li class="nav-item">
        <a href="/inquiries" class="nav-link {activeLink === 'inquiries' ? 'active' : ''}" on:click={() => setActive('inquiries')}>
          Inquiries
        </a>
        <hr class="active-hr"/>
      </li>
      <li class="nav-item">
        <a href="/approvals" class="nav-link {activeLink === 'approvals' ? 'active' : ''}" on:click={() => setActive('approvals')}>
          Approvals
        </a>
        <hr class="active-hr"/>
      </li>
    </ul>
  </div>
</div>



<style>
  .sidebar {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20px;
    padding-left: 5px;
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .sidebar.collapsed {
    transform: translateX(-100%);
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 5px;
  }

  .nav {
    padding-left: 0;
    margin-bottom: 0;
  }

  .nav-item {
    margin-bottom: 0;
  }

  .nav-link {
    color: black;
    padding: 2px 5px;
    display: block;
    text-decoration: none;
  }

  .nav-link.active {
    font-weight: bold;
    color: black;
  }

  .active-hr {
    height: 1px;
    background-color: #ddd;
    transition: height 0.3s ease, background-color 0.3s ease;
  }

  .nav-item .nav-link.active + .active-hr {
    height: 4px;
    background-color: black;
  }



  @media (max-width: 768px) {
    .sidebar {
      position: static;
      width: 100%;
      padding-left: 0;
    }

    .sidebar-content {
      padding-left: 0;
    }
  }

  @media (max-width: 576px) {
    .sidebar {
      padding-left: 0;
    }
  }

  
</style>
