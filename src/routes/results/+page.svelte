<script lang="ts">
    import { instapay } from '$lib/mockData';
    import { page } from '$app/stores';
    import Modal from '$lib/Modal.svelte';
    import { format } from 'date-fns';
	import { onMount } from 'svelte';
    import type {InstapayPayment } from '$lib/types';
    import { filterByDateRangeAndSearch } from '$lib/filter';
    
    let loading = true;
    let filteredData = [];

    function sortByDate() {
        instapay.sort((a, b) => {
            return new Date(a.transactionDateTime).getTime() - new Date(b.transactionDateTime).getTime();
        });
    }
  
    $: {
      const queryParams = $page.url.searchParams;
      const startDate = queryParams.get('startDate') || '';
      const endDate = queryParams.get('endDate') || '';
      const searchTerm = queryParams.get('searchTerm') || '';
  
      filteredData = filterByDateRangeAndSearch(instapay, startDate, endDate, searchTerm);
    }

    function formatDate(dateString: string): string {
      return format(new Date(dateString), 'MM/dd/yyyy HH:MM:SS');
    }
    onMount(() => {
      sortByDate();
      loading = false;
    });

  </script>

  {#if loading}
  <p>Loading...</p>
{:else}
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Instruction ID</th>
          <th scope="col">Sending R/T</th>
          <th scope="col">Transaction date/time</th>
          <th scope="col">Status</th>
          <th scope="col">Local Instrument</th>
          <th scope="col">Category Purpose Code</th>
          <th scope="col">Amount</th>
          <th scope="col">Transaction Currency</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
          {#each filteredData as instapay}
        <tr style="cursor: pointer;">
          <td>{instapay.instructionID}</td>
          <td>{instapay.sendingRt}</td>
          <td>{formatDate(instapay.transactionDateTime)}</td>
          <td>{instapay.status}</td>
          <td>{instapay.localInstrument}</td>
          <td>{instapay.categoryPurposeCode}</td>
          <td>{instapay.amount}</td>
          <td>{instapay.transactionCurrency}</td>
        </tr>
        {/each}
      </tbody>
    </table>
    
{/if}
  