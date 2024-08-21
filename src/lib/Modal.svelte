<script lang="ts">
    import { format } from 'date-fns';
    export let isOpen: boolean;
    export let onClose: () => void;
    export let content: any;
  
    function handleClose() {
      onClose();
    }
  </script>
  
  {#if isOpen}
    <div class="modal show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{content?.title || 'Details'}</h5>
            <button type="button" class="btn-close" aria-label="Close" on:click={handleClose}></button>
          </div>
          <div class="modal-body">
            {#if content}
              <p><strong>Account Name:</strong> {content.accountName}</p>
              <p><strong>Reference Number:</strong> {content.referenceNumber}</p>
              <p><strong>Date:</strong> {format(new Date(content.date), 'MMMM dd, yyyy H:mm:ss')}</p>
            {:else}
              <p>No content available.</p>
            {/if}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" on:click={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  {/if}