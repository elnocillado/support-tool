<script lang="ts">
  import { goto } from '$app/navigation';
  import Sidebar from '$lib/Sidebar.svelte';
  
  let startDate = '';
  let endDate = '';
  let searchTerm = '';

  function search() {
    const queryParams = new URLSearchParams({
      startDate,
      endDate,
      searchTerm
    }).toString();

    goto(`/results?${queryParams}`);
  }

  const menuItems = [
      { name: 'Inquiries', href: '/inquiries', active: true },
    ];
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-2">
      <Sidebar />
    </div>
    <div class="col">
      <slot>
        <div class="px-4 pt-3">
          <p class="fs-5">Inquiries</p>
          <div  class="row g-3">
              <div class="col-md-6">
                <label for="category" class="form-label">Category</label>
            <select id="disabledSelect" class="form-select">
              <option>Transaction</option>
            </select>
              </div>
              <div class="col-md-6">
                  <label for="subcategory" class="form-label">Subcategory</label>
              <select id="disabledSelect" class="form-select">
                <option>Value Transaction Inquiry</option>
              </select>
                </div>
            </div>
            <p class="fs-5 pt-3">Value Transaction Inquiry</p>
          <div  class="row g-3">
            <div class="col-md-6">
              <label for="instrutionID" class="form-label">Instruction ID</label>
              <input type="text" bind:value={searchTerm} class="form-control" id="instructionID">
            </div>
            <div class="col-md-6">
              <label for="participantID" class="form-label">Participant ID</label>
              <input type="text" class="form-control" id="participantID">
            </div>
          </div>
          <div  class="row g-3">
            <div class="col-md-6">
              <label for="windowID" class="form-label">Reconciliation window ID</label>
              <input type="text" class="form-control" id="windowID">
            </div>
            <div class="col-md-6">
              <label for="routingNumber" class="form-label">Routing number</label>
              <input type="text" class="form-control" id="routingNumber">
            </div>
          </div>
          <div  class="row g-3">
            <div class="col-md-6">
              <label for="transactionAmount" class="form-label">Transaction Amount</label>
              <input type="text" class="form-control" id="transactionAmount">
            </div>
            <div class="col-md-6">
              <label for="transactionStatus" class="form-label">Transaction Status</label>
              <input type="text" class="form-control" id="transactionStatus">
            </div>
          </div>
          <div  class="row g-3">
            <div class="col-md-6">
              <label for="localInstrument" class="form-label">Local Instrument</label>
              <input type="text" class="form-control" id="localInstrument">
            </div>
            <div class="col-md-6">
              <label for="categoryPurposeCode" class="form-label">Category purpose code</label>
              <input type="text" class="form-control" id="categoryPurposeCode">
            </div>
          </div>
          <div  class="row g-3">
            <div class="col-md-6">
              <label for="dateStart" class="form-label" >Date Start</label>
              <input type="date" bind:value={startDate} class="form-control" id="dateStart">
            </div>
            <div class="col-md-6">
              <label for="dateEnd" class="form-label">Date End</label>
              <input type="date" bind:value={endDate} class="form-control" id="dateEnd" >
            </div>
          </div>
          <div  class="row g-3">
            <div class="col-md-6">
              <label for="reasonCode" class="form-label">Reason Code</label>
              <input type="text" class="form-control" id="reasonCode">
            </div>
          </div>
          <div class="col-md-6 pt-3">
            <button on:click={search} class="btn btn-warning rounded-pill">Submit</button>
          </div>
      </div>
      </slot>
    </div>
  </div>
</div>

